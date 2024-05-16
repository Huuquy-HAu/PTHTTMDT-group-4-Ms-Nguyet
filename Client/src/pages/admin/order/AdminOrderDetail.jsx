import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPI, patchAPI } from "../../../config/api";
import "./AdminOrderDetail.css";

function AdminOrderDetail() {
  const [orderDetail, setOrderDetail] = useState();
  console.log(orderDetail);
  const [count, setCount] = useState(0);
  const search = useParams();
  const nav = useNavigate();
  const sale = 13000;
  let sum = 0,
    b = 0;

  const getData = async () => {
    try {
      let orderUser = await getAPI("/order/get-one-order/" + search.orderId);
      setOrderDetail(orderUser.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  const changePage = () => {
    nav("/admin/order");
  };

  const handleChangeStatus = async (e) => {
    try {
      await patchAPI("/order/change-order-status/" + search.orderId, {
        status: e.target.value,
      });
      setCount((pre) => pre + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ padding: "32px ", backgroundColor: "#f5f5f5", height: "100%" }}
    >
      <div className="admin_order-info-user">
        <div className="order_info-user-item">
          <h3 className="info_user-item-heading">ĐỊA CHỈ NGƯỜI NHẬN</h3>
          {orderDetail ? (
            <div className="info_user-item-user">
              <h2>Tên người nhận: {orderDetail.userId.fullname}</h2>
              <p className="info-item-user-address">
                Địa chỉ: {orderDetail.address}
              </p>
              <p className="info-item-user-phone">
                Điện thoại: {orderDetail.userId.phone}
              </p>
              <div>
                <span>Trạng thái: </span>
                {orderDetail.status === "canceled" ? (
                  <span>canceled</span>
                ) : orderDetail.status === "done" ? (
                  <span>done</span>
                ) : (
                  <select
                    value={orderDetail.status}
                    onChange={handleChangeStatus}
                    className="info-item-user-status"
                    style={{ border: "none" }}
                  >
                    <option value="canceled">canceled</option>
                    <option value="pending">pending</option>
                    <option value="done">done</option>
                  </select>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="order_info-user-item">
          <h3 className="info_user-item-heading">HÌNH THỨC GIAO HÀNG</h3>
          <div className="info_user-item-delivery">
            <p>Giao tiết kiệm</p>
            <p>Giao vào thứ 5, 02/09</p>
            <p>Được giao bởi Shoppee ( giao từ Hà Nội )</p>
            <p>Phí vận chuyển: {sale.toLocaleString()} ₫</p>
          </div>
        </div>
        <div className="order_info-user-item">
          <h3 className="info_user-item-heading">HÌNH THỨC THANH TOÁN</h3>
          <div className="info_user-item-pay">
            <p>Thanh toán tiền mặt khi nhận hàng</p>
          </div>
        </div>
      </div>
      <div className="admin_order-info-product">
        <div className="order-info-product-heading">
          <p>Sản phẩm</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Giảm giá</p>
          <p>Tạm tính</p>
        </div>
        <div className="order-info-product-body">
          {orderDetail
            ? orderDetail.listProduct.map((item) => {
                if (item.productDetailId !== null) {
                  sum = item.productDetailId.price * item.quantity;
                  b += sum;
                }
                return (
                  <div className="order-info-product-body-container">
                    {item.productDetailId !== null ? (
                      <div className="info_product-left">
                        <img
                          src={
                            item.productDetailId.productId.thumbnail.startsWith(
                              "https"
                            )
                              ? item.productDetailId.productId.thumbnail
                              : "https://shope-b3.thaihm.site/" +
                                item.productDetailId.productId.thumbnail
                          }
                          alt=""
                        />
                        <div>
                          <h2>{item.productDetailId.productId.productName}</h2>
                          <p>Ram: {item.productDetailId.ram}</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.productDetailId !== null ? (
                      <div className="info_product-right">
                        <p>{item.productDetailId.price.toLocaleString()} ₫</p>
                        <p>{item.quantity}</p>
                        <p>0 ₫</p>
                        <p>
                          {(
                            item.productDetailId.price * item.quantity
                          ).toLocaleString()}{" "}
                          ₫
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            : ""}
        </div>
        <div className="order-info-product-footer">
          <div>
            <p>Tạm tính</p>
            <span>{b.toLocaleString()} ₫</span>
          </div>
          <div>
            <p>Phí vận chuyển</p>
            <span>{sale.toLocaleString()} ₫</span>
          </div>
          <div>
            <p>Tổng cộng</p>
            <span>{(b + sale).toLocaleString()} ₫</span>
          </div>
          <div className="admin_order-btn-save">
            <button onClick={changePage}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrderDetail;
