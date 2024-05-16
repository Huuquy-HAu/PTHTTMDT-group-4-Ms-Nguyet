import React, { useEffect } from 'react'
import { Button, Upload, Col, Row, Modal, Checkbox, Form, Input, DatePicker, Space, Select, message } from 'antd';
import { useState } from 'react';
import { getAPI, patchAPI } from '../../../config/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../redux/reducers/userReducer';


const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    }
}


// Upload file logic

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



function AdminProfile() {
    const [count, setCount] = useState(0)
    const [birthDay, setBirthDay] = useState('')
    const [sex, setSex] = useState('')
    const [formImg, setFormImg] = useState(new FormData())
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [data, setData] = useState({})

    let linkk = ''
    const domain = 'http://localhost:8080/'
    const key = 'updatable';
    const nav = useNavigate()
    const dispatch = useDispatch()


    const success = () => {
        message.loading({
            content: 'Loading...',
            key,
            className: 'custom-class',
            style: {
                marginTop: '10vh',
            }
            });


        setTimeout(() => {
            message.success({
                content: 'Đổi ảnh đại diện thành công',
                key,
                duration: 2,
                style: {
                    marginTop: '10vh',
                }
            });
        }, 1000);
    };


    const errorMess = () => {
        message.error('Thất bại ! Hãy xem lại kết nối hoặc chọn lại ảnh');
    };


    // Change-avatar

    const handleChange2 = (info) => {
        const formData = new FormData()
        formData.append('avatar', info.file.originFileObj)
        console.log(112, info);
        setFormImg(formData)

        getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
        });
    };

    const onFinishAvatar = async (values) => {
        try {
            const res = await patchAPI('/user/change-avatar', formImg)
            console.log(res);
            const ress = await getAPI('/auth/get-loged-in-user')
            const action = userLogin(ress.data.user);
            dispatch(action)
            setCount(count + 1)
            success()
        } catch (error) {
            console.log(error);
            errorMess()
        }
    };



    // Btn-open-modal

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Form-edit


    const onFinish = async (values) => {
        try {
            console.log(values);
            let res = await patchAPI('user/update-info', values)
            const ress = await getAPI('/auth/get-loged-in-user')
            const action = userLogin(ress.data.user);
            dispatch(action)
            setCount(count + 1)
            console.log(res);
            message.success({
                content: 'Đổi thông tin thành công',
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
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const changeDate = (event) => {
        console.log(event.target.value);
        setBirthDay(event.target.value)
    }

    const changeSex = (event) => {
        setSex(event.target.value)
    }


    // getData

    const getData = async () => {
        try {
            let res = await getAPI('auth/get-loged-in-user')
            linkk = res.data.user.avatar

            if (!linkk) {
                linkk = 'https://64.media.tumblr.com/970f8c9047f214078b5b023089059228/4860ecfa29757f0c-62/s640x960/9578d9dcf4eac298d85cf624bcf8b672a17e558c.jpg'
            }

            if (!linkk.startsWith('https')) {
                linkk = domain + linkk
            }

            setImageUrl(linkk)
            setData(res.data.user)
            setSex(res.data.user.sex)
            setBirthDay((res.data.user.dateOfBirth.split('T'))[0].split('-').join('-'))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [count])

    return (
        <div className='user-profile'>
            <div className="profile-header">
                <h3>Hồ Sơ Của Tôi</h3>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className="profile-body">
                <div className="body-left">
                    <Row>
                        <Col span={6} >Tên Đăng Nhập</Col>
                        <Col span={18}>
                            <input style={{ marginBottom: "20px", width: "100%" }} type="text" value={data.email} disabled />
                        </Col>
                    </Row>

                    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng không để trống hoặc không được trùng thông tin cũ!',
                                },
                            ]}
                        >
                            <Row>
                                <Col span={6}>Username:</Col>
                                <Col span={18}>
                                    <input className='inp-user' type="text" defaultValue={data.username} />
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            label=""
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng không để trống hoặc không được trùng thông tin cũ!',
                                },
                            ]}
                        >
                            <Row>
                                <Col span={6}>Full Name:</Col>
                                <Col span={18}>
                                    <input className='inp-full' type="text" defaultValue={data.fullname} />
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            label=""
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng không để trống hoặc không được trùng thông tin cũ!',
                                },
                            ]}
                        >
                            <Row>
                                <Col span={6}>Phone: </Col>
                                <Col span={18}>
                                    <input className='inp-phone' type="number" defaultValue={data.phone} />
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            label=""
                            name="sex"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng không để trống hoặc không được trùng thông tin cũ!',
                                },
                            ]}
                        >

                            <Row>
                                <Col span={6}>Sex: </Col>
                                <Col span={18}>
                                    <select name="" id="inp-sex" value={sex} onChange={(e) => { changeSex(e) }}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            label=""
                            name="dateOfBirth"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng không để trống hoặc không được trùng thông tin cũ!',
                                },
                            ]}
                        >

                            <Row>
                                <Col span={6}>Date of birth: </Col>
                                <Col span={18}>
                                    <input className='inp-date' type={'date'} value={birthDay} onChange={(e) => { changeDate(e) }} />
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Đổi thông tin
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* <Row>
                        <Col span={6} >Tên</Col>
                        <Col span={18}>Duong Huu Quy</Col>
                    </Row>

                    <Row>
                        <Col span={6} >Email</Col>
                        <Col span={18}>haha@gmail.com</Col>
                    </Row>


                    <Row>
                        <Col span={6} >Số Điện Thoại</Col>
                        <Col span={18}>0122222222</Col>
                    </Row>


                    <Row>
                        <Col span={6} >Tên Shop</Col>
                        <Col span={18}>Quyhuu</Col>
                    </Row>

                    <Row>
                        <Col span={6} >Giới tính</Col>
                        <Col span={18}>
                            <input type="radio" name="sex" id="" checked />Nam
                            <input type="radio" name="sex" id="" />Nữ
                            <input type="radio" name="sex" id="" />Khác
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6} >Ngày sinh</Col>
                        <Col span={18}>
                            <input type="date" name="" id="" />
                        </Col>
                    </Row>

                    <Row>
                        <Button type="primary" onClick={showModal}>
                            Đổi thông tin
                        </Button>
                        
                    </Row> */}
                </div>

                <div className="body-right">
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinishAvatar}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange2}
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
                                    64
                                )}
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <p>Dung lượng tối đa 1MB <br /> Định dạng: .JPEG, .PNG</p>
                        </Form.Item>

                        <Form.Item >
                            <Button className='btn-change-avatar' type="primary" htmlType="submit">
                                Đổi ảnh đại diện
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>


        </div>
    )
}

export default AdminProfile