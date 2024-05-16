import React, { useState } from 'react'
import { Col, Row } from 'antd';
import { Input, Space, Form, Button, TreeSelect, Select } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AudioOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import '../addProduct/addProduct.css'
import axios from 'axios';
import { useEffect } from 'react';
import { instance } from '../../../../config/axios';
import { getAPI, postAPI } from '../../../../config/api';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

const onSearch = (value) => console.log(value);

function AddProduct() {

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [branch, setBranch] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [idProduct, setIdProduct] = useState([])
  const [listCategory, setListCategory] = useState([])
  const [dataFile, setDataFile] = useState(new FormData())

  const nav = useNavigate();


  const handleChange = async (info) => {
    console.log(118, info.file.originFileObj);
    const formData = new FormData()
    formData.append('thumbnail', info.file.originFileObj)
    console.log('formData', info.file.originFileObj);
    setDataFile(formData)

    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };


  const onFinish = async (values) => {
    console.log(65, 'Success:', values);
    try {
      console.log(74, dataFile);
      values.thumbnail = values.thumbnail.file.originFileObj
      dataFile.append('productName', values.productName);
      dataFile.append('brand', values.branch);
      dataFile.append('categoryId', values.categoryId);
      dataFile.append('price' , values.price*1)
      let res = await postAPI('/product/create-product', dataFile);
      let idNewProduct = res.data.product._id;
      setIdProduct(idNewProduct)
      console.log(79, res);
      nav(`/admin/product/${idNewProduct}/detail/create`);
    } catch (error) {
      console.log(82, error);
      alert("Sản phẩm đã tồn tại");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getCategory = async (value) => {
    try {
      let res = await getAPI('/category/get-all-categories')
      setListCategory(res.data.categories);
    } catch (error) {
      console.log(80, error);
    }
  }



  const handleChangeValue = (value) => {
    console.log(95, value)
    const branchName = value
    setBranch(branchName)
  }

  const onChangeValue = (value, text) => {
    console.log(104, value);
    console.log(text.children);
    const categoryName = text.children
    setCategoryName(categoryName)
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const options = [
    {
      title: 'Điện Thoại',
      value: 'Điện Thoại',
      children: [
        {
          title: 'Apple',
          value: 'Apple',
        },
        {
          title: 'SamSung',
          value: 'SamSung',
        },
        {
          title: 'Xiaomi',
          value: 'Xiaomi',
        },
        {
          title: 'OPPO',
          value: 'OPPO',
        },
        {
          title: 'Nokia',
          value: 'Nokia',
        },
        {
          title: 'ASUS',
          value: 'ASUS',
        },
      ],
    },
    {
      title: 'Máy tính bảng',
      value: 'Máy tính bảng',
      children: [
        {
          title: 'Ipad',
          value: 'Ipad',
        },
        {
          title: 'SamSung',
          value: 'SamSung',
        },
        {
          title: 'Nokia',
          value: 'Nokia',
        },
        {
          title: 'Xiaomi',
          value: 'Xiaomi',
        },
        {
          title: 'Lenovo',
          value: 'Lenovo',
        },
      ],
    },
    {
      title: 'Laptop',
      value: 'Laptop',
      children: [
        {
          title: 'Mac',
          value: 'Mac',
        },
        {
          title: 'Dell',
          value: 'Dell',
        },
        {
          title: 'ASUS',
          value: 'ASUS',
        },
        {
          title: 'Xiaomi',
          value: 'Xiaomi',
        },
        {
          title: 'Inrel',
          value: 'Inrel',
        },
        {
          title: 'HP',
          value: 'HP',
        },
        {
          title: 'Acer',
          value: 'Acer',
        },
      ],
    },
    {
      title: 'Chuột',
      value: 'Chuột',
      children: [
        {
          title: 'Apple',
          value: 'Apple',
        },
        {
          title: 'Razer',
          value: 'Razer',
        },
        {
          title: 'Nogitech',
          value: 'Nogitech',
        },
        {
          title: 'ASUS',
          value: 'ASUS',
        },
        {
          title: 'Microsoft',
          value: 'Microsoft',
        },
      ],
    },
    {
      title: 'Keyboard',
      value: 'Keyboard',
      children: [
        {
          title: 'Apple',
          value: 'Apple',
        },
        {
          title: 'Razer',
          value: 'Razer',
        },
        {
          title: 'Nogitech',
          value: 'Nogitech',
        },
        {
          title: 'ASUS',
          value: 'ASUS',
        },
        {
          title: 'Microsoft',
          value: 'Microsoft',
        },
      ],
    },
  ]

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className='classAddProduct'>

      <div className='addProduct-header'>
        <h4>Thêm 1 sản phẩm mới</h4>
        <p>Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn</p>
      </div>
      <hr />
      <div className="search-product">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className="inp-search-addProduct"
            label="Tên sản phẩm :"
            name="productName"
            rules={[{ required: true, message: "Hãy nhập vào tên sản phẩm" }]}
          >
            <Input
              className="input-addProductName"
              showCount
              maxLength={120}
              placeholder="Nhập vào"
            />
          </Form.Item>
          <div className="addProduct-body">
            <div className="input-search">
              <span>Chọn ngành hàng chính xác , <a className='link-addProduct' href="/">Bấm vào đây để tìm hiểu</a></span>
            </div>

            <Form.Item label="Tên ngành hàng : " className='addCategory-addProduct' name='categoryId'>
              <Select onChange={onChangeValue}>
                {listCategory.map(function (value) {
                  return (
                    <Select.Option value={value._id}>{value.categoryName}</Select.Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Form.Item label="Tên hãng hàng : " className='addBranch-addProduct' name='branch'>
              <TreeSelect
                onChange={handleChangeValue}
                treeData={options}
              />
            </Form.Item>

          </div>

          <div className='footer-addProduct'>
            <div className='chose-addProduct'>
              Đã chọn :   <p> {categoryName} <SwapRightOutlined /> {branch} </p>
            </div>

            <Form.Item
              className="inp-addPriceProduct"
              label="Giá :"
              name="price"
              rules={[{ required: true, message: "Hãy nhập vào tên sản phẩm" }]}
            >
              <Input
                className="input-priceProduct"
                placeholder="Nhập vào"
              />
            </Form.Item>

            <div className="upload-img">
              <h4>Thêm ảnh cho sản phẩm</h4>
              <div className='input-upload-img'>

                <Form.Item className='img-product' name="thumbnail" rules={[{ required: true, message: 'Hãy nhập vào ảnh của sản phẩm' }]} >
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          width: '100%',
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </Form.Item>
              </div>
            </div>
            <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
              <Button id="btn-addProduct" type="primary" htmlType="submit">
                Tiếp theo
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct
