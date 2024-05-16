import React, { Fragment } from 'react'
import './OrderDetail.css'
import { LeftOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAPI, patchAPI } from '../../../config/api';
import { Steps } from 'antd';
import { Button, Modal, message } from 'antd';
import ReasonCancel from '../userOrderHistory/ReasonCancel';

const { Step } = Steps;
const key = 'updatable';



function OrderDetail() {
  const { orderId } = useParams()
  const [orderAPI, setOrderAPI] = useState([]);
  const [btnValue, setBtnValue] = useState({});
  const [number, setNumber] = useState(0);
  const [address, setAddress] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0)
  const nav = useNavigate();
  let search = useLocation();
  let totalPrice = 0;
  let ship = 16500;
  let discount = 1;
  let status;
  let btn;
  let statusBtn;
  let currentStatus = 0;


  let objType = {}
  if (search.search) {
    let query = search.search.slice(1).split('=');
    objType[query[0]] = query[1];
  }

  const getOrder = async () => {
    try {
      let res = await getAPI('/order/get-one-order/' + orderId);
      setOrderAPI(res.data.order.listProduct);
      setAddress(res.data.order);
      let object = {};
      object = res.data.order;
      setBtnValue(object);
    } catch (error) {
      console.log(error);
    }
  }

  const cancelOrder = async (orderId) => {
    let values = { status: 'canceled' }
    try {
      await patchAPI('/order/change-order-status/' + orderId, values);
      setNumber(number + 1);
      setIsModalOpen(false);
      openMessage();
    } catch (error) {
      console.log(error);
    }
  }

  const back = () => {
    nav(`/user/order/${objType.type ? `?type=${objType.type}` : ''}`)
  }

  useEffect(() => {
    getOrder();
  }, [count])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Đã hủy đơn hàng thành công', key, duration: 2 });
      btn = <Fragment >
        <button className='btn-took-product'>Hủy đơn hàng</button>
        <button className='btn-secondary'>Liên hệ người bán</button>
      </Fragment>;
      setCount(count + 1);
    }, 1500);
  };

  if (btnValue.status === 'pending') {
    status = 'Đơn hàng đang chờ xác nhận';
    btn = <Fragment >
      <button className='btn-took-product' onClick={showModal}>Hủy đơn hàng</button>
      <Modal okText={'Hủy đơn hàng'} cancelText={'Không phải lúc này'} title="Chọn lý do hủy" visible={isModalOpen} onOk={() => {
        cancelOrder(btnValue._id)
      }} onCancel={handleCancel}>
        <ReasonCancel />
      </Modal>
      <button className='btn-secondary'>Liên hệ người bán</button>
    </Fragment>;
    statusBtn = "wait";
    currentStatus = 1;
  } else if (btnValue.status === 'done') {
    status = 'Đơn hàng đã giao hàng thành công';
    btn = <Fragment><button className='btn-took-product'>Đánh giá</button>
      <button className='btn-secondary'>Yêu cầu trả hàng/hoàn tiền</button>
      <Link to={'/cart'}> <span style={{ color: 'white', display: "block" }}><button className='btn-took-product' style={{ width: '100%' }}>Mua lại</button></span></Link></Fragment>
    statusBtn = "finish";
    currentStatus = 4;
  } else if (btnValue.status === 'canceled') {
    status = 'Đơn hàng đã hủy';
    btn = <Fragment> <Link to={'/cart'}><button className='btn-took-product' style={{ width: '100%' }}>Mua lại</button></Link> <button className='btn-secondary'>Liên Hệ Người Bán</button></Fragment>
    statusBtn = "error";
    currentStatus = 2;
  } else if (btnValue.status === 'delivering') {
    status = 'Đơn hàng đang được giao';
    btn = <Fragment><button className='btn-secondary'>Liên Hệ Người Bán</button></Fragment>
    statusBtn = "process";
    currentStatus = 3;
  }

  return (
    <div className='order-detail-container'>
      <div className="order-detail">
        <div className="order-detail__status">
          <div className="order-detail__status-header">
            <div className="order-header-left" onClick={back}>
              <LeftOutlined />
              <span className='back-text'>Trở lại</span>
            </div>

            <div className="order-header-right">
              <span>
                <span className='id-order'>ID đơn hàng : {btnValue._id}</span>
                <span className={'order-status order-status-' + btnValue.status}>{status}</span>
              </span>

            </div>
          </div>

          <div className="order-detail__status-content">

            {statusBtn !== 'error' ? <Steps current={currentStatus} status={statusBtn} className="stepper" size='default'>
              <Step title="Đơn hàng đã đặt" />
              <Step title="Chờ xác nhận" />
              <Step title="Đang giao" />
              <Step title="Đã giao" />
            </Steps> : <Steps current={1} status={statusBtn} className="stepper" size='default'>
              <Step title="Đơn hàng đã đặt" />
              <Step title="Đã hủy" />
            </Steps>}
          </div>
        </div>


        <div className="order-detail__payment">
          <div className="payment-left">
            <div className="stepper-date">
              <span>Đơn hàng được đặt lúc : {btnValue.createdAt}</span>
            </div>
            <span>Vui lòng thanh toán trước
              22:31 29-08-2022
              bằng phương thức Tài khoản ngân hàng đã liên kết Ví ShopeePay</span>
          </div>

          <div className="payment-right">
            {btn}
          </div>
        </div>
        <div className="order-detail__address">
          <div className="border-top"></div>
          <div className="order-detail__address-content">
            <h1 className='address-title'>Địa chỉ nhận hàng</h1>
            <h3>Tên khách hàng : {address?.userId?.fullname}</h3>
            <p className="address-content-detail">
              <div>Số điện thoại : {address?.userId?.phone}</div>
              <div>Địa chỉ nhận hàng : {address?.address} </div>
            </p>
          </div>
        </div>

      </div>

      {orderAPI.map((data) => {
        totalPrice += data.quantity * data.productDetailId?.price;
        return (
          <Fragment>

            <div className="order-detail__product">
              <div className="order-detail__product-header">
                <div className="order-product--shop">
                  <div className="order-product--shop__left">
                    <span className='shop-love'>Yêu thích+</span>
                    <h1> Dareu Viet Nam</h1>
                    <button className='chat'> <i className="fa-solid fa-comment"></i> Chat</button>
                    <button className="watch-shop"><i className="fa-solid fa-store"></i>Xem Shop</button>
                  </div>

                  <div className="order-product--shop__right">

                  </div>
                </div>
              </div>
              <div className='line'></div>


              <div className="order-detail__product-content">
                <div className="order-product--detail">
                  <Fragment>
                    <div className="order-product-detail__img">
                      <img src={(data.productDetailId?.productId.thumbnail.startsWith('https') ? data.productDetailId?.productId.thumbnail : 'https://shope-b3.thaihm.site/' + data.productDetailId?.productId.thumbnail)} alt="" />
                    </div>
                    <div className="order-product-detail__name">

                      <div className="order-product-detail__category">
                        <span>Phân loại hàng:{data.productDetailId?.color},{data.productDetailId?.ram},{data.productDetailId?.rom}</span>
                      </div>
                      <div className="listProduct-infor">
                        <div className="order-product-detail__quantity">
                          <span>Số lượng mua : {data.quantity}</span>
                        </div>
                        <div className="order-product-detail__price">
                          <span><sup>₫{data.productDetailId?.price.toLocaleString()}</sup></span>
                        </div>
                      </div>
                    </div>

                  </Fragment>



                </div>
              </div>
            </div>
          </Fragment>
        )
      })}



      <div className="order-list__total">

        <div className='order-list-item'>
          <p>Tổng tiền hàng : </p>
          <span><sup>₫</sup>{totalPrice.toLocaleString()}</span>
        </div>

        <div className='order-list-item'>
          <p>Phí vận chuyển:</p>
          <span><sup>₫</sup>{ship.toLocaleString()}</span>
        </div>

        <div className='order-list-item'>
          <p>Giảm giá cước vận chuyển:</p>
          <span>-<sup>₫</sup>{(discount * ship).toLocaleString()}</span>
        </div>

        <div className='order-list-item'>
          <p>Tổng số tiền:</p>
          <span><sup>₫</sup>{(totalPrice + ship - discount * ship).toLocaleString()}</span>
        </div>

      </div >
    </div >
  )
}

export default OrderDetail



