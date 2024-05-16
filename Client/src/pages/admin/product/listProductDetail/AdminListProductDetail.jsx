import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Modal, Descriptions, Input, InputNumber, Switch, Upload, message } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import './AdminListProductDetail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAPI, patchAPI, postAPI } from '../../../../config/api';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

function AdminListProductDetail() {
  const { productId } = useParams()
  const [Data, setData] = useState([])
  const [count, setcount] = useState(0)
  const [Urll, setUrl] = useState('')
  const [editDetail, setEditDetail] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [dataDetail, setDataDetail] = useState({})
  const [fileList, setFileList] = useState([])
  const domain = 'http://localhost:8080/'
  const handleCancelPreview = () => setPreviewOpen(false);
  const [form] = Form.useForm()

  const handlePreview = async (file) => {
    console.log(31, file)
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  useEffect(() => {
    getData()
  }, [count])

  const getData = async () => {
    try {
      let res = await axios.get('https://shope-b3.thaihm.site/api/productDetail/get-all-detail/product/' + productId)
      let url = res.data.productDetails[0].listImg[0]
      if (!url) {
        url = 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/a8/16/d6/a816d667-a1af-83c3-97ba-0152eb8fd205/AppIcon-1x_U007emarketing-0-5-0-0-85-220.png/1200x600wa.png'
      }
      if (!url.startsWith('https')) {
        url = domain + url
      }
      setUrl(url)
      setData(res.data.productDetails)
    }catch (error) {
      console.log(error);
    }
  }

  // Modal-logic

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue(
      {
        color: '',
        ram:'',
        rom:'',
        storage:'',
        price:''
      })
    setFileList([])
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    if (editDetail) {
      setEditDetail(false)

    }
    setIsModalVisible(false);
  };

  // Form-logic

  const onFinish = async (values) => {
    console.log(96, values);
    console.log(97, fileList);
    try {
      let res = await postAPI('productDetail/create-product-detail/product/' + productId, values);
      console.log(97, res.data.productDetail._id);
      const formData = new FormData();
      for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i].originFileObj
        formData.append('thumbs', file);
      }
      let newDetail = await patchAPI('/productDetail/add-product-detail-thumbs/' + res.data.productDetail._id, formData);
      form.setFieldsValue(
        {
          color: '',
          ram:'',
          rom:'',
          storage:'',
          price:''
        })
      setFileList([])
      message.success({
        content: 'Thêm Detail thành công',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
      setcount(count + 1)
    } catch (error) {
      console.log(error);
      message.error({
        content: 'Thất bại',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  // Modal-editDetail-logic

  const [isModalOpenn, setIsModalOpenn] = useState(false);
  const [idEdit, setIdEdit] = useState('')

  const onFinish1 = async (values) => {
    console.log(values);
    try {
      let res = await patchAPI('/productDetail/update-product-detail-info/' + idEdit, values)
      console.log(res);
      const formData = new FormData();
      for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i].originFileObj
        formData.append('thumbs', file);
      }
      if(formData) {
        let newDetail = await patchAPI('/productDetail/add-product-detail-thumbs/' + idEdit, formData);
        console.log(newDetail);
        // alert(res.statusText)
        message.success({
          content: `Sửa thông tin và thêm ảnh thành công`,
          className: 'custom-class',
          style: {
            marginTop: '10vh',
          },
        });
      }else {
        message.success({
          content: 'Sửa thông tin Detail thành công ',
          className: 'custom-class',
          style: {
            marginTop: '10vh',
          },
        });
      }
      setcount(count + 1)
      handleCancel()
    } catch (error) {
      console.log(error);
      message.error({
        content: 'Thất bại',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    }
  };



  const handleOk1 = () => {
    setIsModalOpenn(false);
  };

  const handleCancel1 = () => {
    setIsModalOpenn(false);
  };

  const openModall = () => {
    setEditDetail(true)
    showModal()
  }
// console.log(FileList);
  // console.log(Data);
  // if(dataDetail) {
  //   dataDetail.listImg?.map((value) => {
  //     if(!value.startsWith('http')){
  //       value = domain + value
  //       array.push(value)
  //     }
  //   })
  //   // setFileList(array)
  // }

  const removeFile = async (e) => {
    const linkRemove = e.url.split('https://shope-b3.thaihm.site/')[1];
    try {
      let res = patchAPI('/productDetail/remove-product-detail-thumbs/'+idEdit, {path:linkRemove})
      console.log(res);
      message.success({
        content: 'Xóa ảnh thành công',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    } catch (error) {
      console.log(error);
      message.error({
        content: 'Thất bại',
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    }
  }

  return (
    <div className='adminListProductDetail' >
      <div className="adminListProductDetail-header">
        <div className="adminListProductDetail-header-left">
          {/* <h3>Product : {productDT.productName}</h3> */}
        </div>
        <div className="adminListProductDetail-header-right">
          <Button type="primary" onClick={showModal} >
            + Thêm 1 sản phẩm mới
          </Button>
          <Modal title={editDetail ? 'Edit Detail Form' : "Create Product Detail"} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form form={form} name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={editDetail ? onFinish1 : onFinish} onFinishFailed={onFinishFailed}  autoComplete="off" >
              <Form.Item
                label="Color"
                name="color"
                rules={[
                  {
                    required: true,
                    message: 'Please input color!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Ram"
                name="ram"
                rules={[
                  {
                    required: true,
                    message: 'Please input ram!',
                  },
                ]}
              >
                {/* <Input /> */}
                <Input />
              </Form.Item>

              <Form.Item
                label="Rom"
                name="rom"
                rules={[
                  {
                    required: true,
                    message: 'Please input rom!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Storage"
                name="storage"
                rules={[
                  {
                    required: true,
                    message: 'Please input Storage!',
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: 'Please input Price!',
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  onRemove={removeFile}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelPreview}>
                  <img
                    alt="example"
                    style={{
                      width: '100%',
                    }}
                    src={previewImage}
                  />
                </Modal>

              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  {editDetail ? 'Change Detail' : "Add Detail"}
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
      <div className="adminListProductDetail-body">
        <div className="adminListProductDetail-table">
          <div className="adminListProductDetail-table-header">
            <Descriptions title="" column={7}>
              <Descriptions.Item label="Product"></Descriptions.Item>
              <Descriptions.Item label="">Color</Descriptions.Item>
              <Descriptions.Item label="">Status</Descriptions.Item>
              <Descriptions.Item label="">RAM-ROM</Descriptions.Item>
              <Descriptions.Item label="">
                Storage
              </Descriptions.Item>
              <Descriptions.Item label="">Price</Descriptions.Item>
            </Descriptions>
          </div>
          <div className="adminListProductDetail-table-body">
            {
              Data ? Data.map((value, index) => {
                const onChange = async (checked) => {
                  try {
                    let res = await patchAPI('/productDetail/update-product-detail-status/' + value._id, { status: checked ? 'enable' : "disable" })
                    setcount(count + 1)
                  } catch (error) {
                    console.log(error);
                  }
                };

                const getDataDetail = async () => {
                  try {
                    let array = []
                    setIdEdit(value._id)
                    let res = await getAPI('/productDetail/get-one-detail/' + value._id)
                    console.log(res.data.detail);
                    setDataDetail(res.data.detail)
                    setEditDetail(true)
                    form.setFieldsValue(
                      {
                        color: res.data.detail.color,
                        ram: res.data.detail.ram,
                        rom: res.data.detail.rom,
                        storage: res.data.detail.storage,
                        price: res.data.detail.price
                      })
                    res.data.detail.listImg?.map((val) => {
                      if (!val.startsWith('http')) {
                        val = domain + val
                        array.push({url:val})
                      }
                    })
                    setFileList(array)
                    setIsModalVisible(true);
                    setIsModalOpenn(true);
                  } catch (error) {
                    console.log(error);
                  }
                }

                const openModall = () => {
                  getDataDetail()
                };




                return (
                  <div className='product'>
                    <Descriptions title="" column={7}>
                      <Descriptions.Item label=""><img src={Urll} alt="" width={120} /></Descriptions.Item>
                      <Descriptions.Item label="">{value.color}</Descriptions.Item>
                      <Descriptions.Item label="">{value.status}</Descriptions.Item>
                      <Descriptions.Item label="">{value.ram} - {value.rom}</Descriptions.Item>
                      <Descriptions.Item label=""> {value.storage} </Descriptions.Item>
                      <Descriptions.Item label=""> {value.price} </Descriptions.Item>
                      <Descriptions.Item label="">
                        <Switch checked={value.status == 'enable' ? true : false} onChange={onChange} />
                      </Descriptions.Item>
                      <Descriptions.Item label=""></Descriptions.Item>
                      <Descriptions.Item label="">
                        <Button type="primary" onClick={() => { openModall() }}>
                          Edit Detail
                        </Button>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                )
              }) : <h1>Đang tải</h1>
            }
          </div>
        </div>
      </div>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelPreview}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  )
}

export default AdminListProductDetail