import {Button, Form, Modal, Table, Upload,  Select, Input, message,  Image  } from 'antd';
import React, { useState } from 'react';
import './AdminListProduct.css'
import { useNavigate} from "react-router-dom";
import { getAPI, patchAPI } from '../../../../config/api';
import { useEffect} from 'react';


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

function AdminListProduct() {
  const [productId, setProductId] = useState()
  const [listCategory, setListCategory] = useState([])
  const [uData, setUdata] = useState([])
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState();
  const [formImg, setFormImg] = useState(new FormData())
  const [defaultValueName, setDefaultValueName] = useState();
  const [defaultValueBrand, setDefaultValueBrand] = useState();
  const [defaultValueType, setDefaultValueType] = useState();
  async  function getAPIproduct() {
    try {
        let products = await getAPI(`/product/get-all-products`);
        let newList = []
        products.data.products.map(
          (value)=>{
            newList.push(
              {
                productName: value.productName,
                thumbnail:value.thumbnail.startsWith('https')?  <Image className='preview-img' src={value.thumbnail} /> : <Image className='preview-img' src={`https://shope-b3.thaihm.site/${value.thumbnail}`} />,
                brand: value.brand,
                quantityProperty: value.listDtail.length,
                type: value.categoryId.categoryName,
                id: value._id
              }
            )
          } 
        )
        setUdata(newList)
        setCount(count + 1)
    }
    catch (error) {
        console.log(error);
    }
  }
  const getCategory = async () => {
    try {
      let res = await getAPI('/category/get-all-categories')
      setListCategory(res.data.categories);
      console.log(res.data.categories);
    } catch (error) {
      console.log(66, error);
    }
  }
  const onFinish = async (data) => {
    console.log(77, data);
    try {  
      let changeInfo ={
        productName:data.productName,
        brand:data.brand,
        categoryId:data.categoryId
      }
      console.log(83, changeInfo);
      const res = await patchAPI(`/product/update-product-info/${productId}`, changeInfo)
      const ress = await patchAPI(`/product/update-product-thumb/${productId}`, formImg)
      console.log(84, res);
      console.log(ress);
      message.success('Đổi thông tin thành công')
    } catch (error) {
        console.log(error);
        message.error('Thất bại')
    }
  };
  const handleChange2 = (info) => {
    const formData = new FormData()
    formData.append('thumb', info.file.originFileObj)
    console.log(100, info);
    setFormImg(formData)
    getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
    });
  };
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  const [open, setOpen] = useState(false);
  const handleOk = (e) => {
    setOpen(false);
  };

  const handleCancel = (e) => {
    setOpen(false);
  };
  const navigate = useNavigate();
  
  const [form] = Form.useForm();
  useEffect(() => {
    getAPIproduct() 
    getCategory()
  },[])
  const { Column } = Table;

  function selectCategory (category){
    console.log(113, category);
    form.setFieldValue('categoryId', category)
  }
return (
    <div>
      <Table
        dataSource={uData}
      >
      <Column 
        title= 'Ảnh mô tả sản phẩm'
        dataIndex= 'thumbnail'  
        className='column-list-product'
        onPreview='handlePreview'
        />
      <Column 
        title= 'Tên sản phẩm'
        dataIndex= 'productName' 
        width= '20%' 
        className='column-list-product'/>
      <Column 
        title= 'Thương hiệu'
        dataIndex= 'brand' 
        className='column-list-product' />
      <Column 
        title= 'Phân loại'
        dataIndex= 'type'  
        className='column-list-product'/>
      <Column 
        title= 'Số lượng biến thể'
        dataIndex= 'quantityProperty'  
        className='column-list-product'/>
      <Column
        title= 'Xem sảm phẩm'
        dataIndex= 'operation'
        className='column-list-product'
        render = {(record,index) => {
          const viewDetail =()=>{
            navigate(`/admin/product/${index.id}/detail` )
          };
          return(
            <span>
              <Button
              className='btn-list-product'
              type="primary"
              onClick={() => {viewDetail()}}
              >
              Xem chi tiết
              </Button>
            </span>
        )}}
      />
      <Column
        title= 'Sửa thông tin'
        dataIndex= 'operation'
        className='column-list-product'
        render={ (record,index) => {
          const showModal = () => {
            console.log(index);
            form.setFieldsValue(
              {
                productName: index.productName,
                brand: index.brand,
                categoryId: index.type
              })
            setProductId(index.id)
            setOpen(true);
          };
          return (
            <span>
              <Button
                className='btn-list-product'
                type="primary"
                onClick={showModal}
              >
              Sửa
              </Button>
            </span>
          )
        } }
      />
      </Table>
      <Modal
        title="Sửa thông tin"
        visible={open}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: false,
          className: 'btn-ok'
        }}
        cancelButtonProps={{
          disabled: false,
        }}
      >
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item>    
        <Upload
              name="thumb"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange2}
          >
            {imageUrl ?(
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : 'Ảnh'}
            </Upload>
      </Form.Item>     
      <label>Tên sản phẩm</label>
      <Form.Item name='productName'>
        <Input dataIndex='productName' defaultValue={defaultValueName} placeholder="Vui lòng điền đủ thông tin" id='productNameInput' width='50%' className='inp-list-product'/>
      </Form.Item>
      <label>Thương hiệu</label>
      <Form.Item name='brand'>
        <Input dataIndex='brand' defaultValue={defaultValueBrand} placeholder="Vui lòng điền đủ thông tin" id='brandInput' width='50%' className='inp-list-product' />
      </Form.Item>
      <Form.Item dataIndex='category' name='categoryId'>
        <label>Ngành hàng</label>
        <Select
          defaultValue={defaultValueType}
          className='select-list-product'
          style={{
            width: 120,
          }}
          width='50%'
          id='categorySelect'
          onChange={selectCategory}
          >
          {listCategory.map(function (value) {
            return (
              <Select.Option value={value._id} >{value.categoryName}</Select.Option>
            )
          })}
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
     
    </Form>
      </Modal>
    </div>
  )
}

export default AdminListProduct