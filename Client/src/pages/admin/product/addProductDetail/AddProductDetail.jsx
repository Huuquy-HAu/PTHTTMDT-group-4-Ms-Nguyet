import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { Input, Form } from 'antd';
import './AddProductDetail.css'
import { useParams, useNavigate } from 'react-router-dom';
import { patchAPI, postAPI } from '../../../../config/api';

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
function AddProductDetail() {
  const { productId } = useParams()
  const [imgFile, setImgFile] = useState(new FormData()) ;
  const navigate = useNavigate()
  const onFinishIMG = async (values) => {
    console.log('Success:', values);
    try {
      let res = await postAPI(`/product/update-product-info/${productId}`, values)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      let res = await postAPI(`/productDetail/create-product-detail/product/${productId}`, values)
      console.log(46, res);
      for (const pair of imgFile.entries()) {
        console.log(pair[0], pair[1]);
      }
      let data = await patchAPI(`/productDetail/add-product-detail-thumbs/${res.data.productDetail._id}`, imgFile)
      console.log(48, data);
      message.success('Thêm thành công')
      navigate('/admin/product')
    } catch (error) {
      console.log(error);
      message.error('Thất bại')
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleOk = async (e) =>{
    // const res = await postAPI('/productDetail/add-product-detail-thumbs/:productId', imgFile)
    // console.log(res);
  }
    const [loading, setLoading] = useState([false,false,false,false,false,false,false,false,false]);
    const [imageUrl, setImageUrl] = useState(['','','','','','','','','']);
    
    const name = ['* Ảnh bìa', 'Hình ảnh 1','Hình ảnh 2','Hình ảnh 3', 'Hình ảnh 4', 'Hình ảnh 5', 'Hình ảnh 6', 'Hình ảnh 7', 'Hình ảnh 8']
    const handleChange = (info, index) => {
      console.log(info.file.originFileObj);
      imgFile.append('thumbs', info.file.originFileObj )
      setImgFile(imgFile)
      console.log(53, info);
      if (info.file.status === 'uploading') {
        getBase64(info.file.originFileObj, (url) => {
          let data = [...imageUrl]
          data[index] = url
          setImageUrl(data);
        });
        return;
      }
  
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, (url) => {
          setLoading(false);
          setImageUrl(url);
        });
      }
    }
    const uploadButton = (index) => {
      return (
        (
          <div>
            {loading[index] ? <LoadingOutlined /> : <PlusOutlined />}
            <div
              style={{
                marginTop: 8,
              }}
            >
            </div>
          </div>
        )
      )
    };
  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFinishIMG={onFinishIMG}
      handleOk={handleOk}
    >
    <div>
        <div className='container' >
          <p className='head-p'>Thông tin cơ bản</p>
          <div className='add-img'>
            <div className='label'>
              <p className='item-p'>Hình ảnh sản phẩm</p>
            </div>
            <div className='add-zone'>

              {imageUrl.map((data, index) => {
                console.log(imageUrl[index] ? true : false);
                return (
                  <div className='add-img-upload-item'>
                    <div>
                    <Form.Item>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      onChange={(file) => {handleChange(file, index)}}
                    >
                      {imageUrl[index] ? (
                        <img
                          src={imageUrl[index]}
                          alt="avatar"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      ) : (
                        uploadButton(index)
                      )}
                    </Upload>
                    </Form.Item>
                    </div>
                    <p className='p-des-item-special'>{name[index]}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='product-info'>
          <div className='product-info-item'>
            <Form.Item
              label="Màu sắc"
              name="color"
              rules={[
                {
                  required: true,
                  message: 'Điền màu sắc',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          
          <div className='product-info-item'>
          <Form.Item
            label="RAM"
            name="ram"
            rules={[
              {
                required: true,
                message: 'Điền thông số RAM',
              },
            ]}
          >
            <Input />
          </Form.Item>
          </div>
          <div className='product-info-item'>
            <Form.Item
              label="ROM"
              name="rom"
              rules={[
                {
                  required: true,
                  message: 'Điền thông số ROM',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          </div>
          <p className='head-p'>Thông tin bán hàng</p>
          <div className='sell-info'>
          <Form.Item
              label="Giá sản phẩm"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Điền giá',
                },
              ]}
            >
              <Input />
            </Form.Item>
            </div>
            <div className='sell-info'>
            <Form.Item
              label="Số lượng sản phẩm"
              name="storage"
              rules={[
                {
                  required: true,
                  message: 'Điền số lượng',
                },
              ]}
            >
              <Input />
            </Form.Item>
            </div>
        </div>
        <div><button className='btn-add'>Thêm sản phẩm</button></div>
    </div>
    </Form>
  )
};;

export default AddProductDetail