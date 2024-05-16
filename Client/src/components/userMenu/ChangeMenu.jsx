import React, { useState } from "react";
import "./usermenu.css";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { patchAPI } from "../../config/api";

function ChangeMenu() {
  const nav = useNavigate();

  const success = () => {
    message.success(
      "Đổi mật khẩu thành công ! bạn sẽ được chuyển đến trang đăng nhập ngay bây giờ !"
    );
  };

  const error = () => {
    message.error("This is an error message");
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      let res = await patchAPI("user/change-password", values);
      console.log(res.data.message);
      success();
      nav("/signIn");
    } catch (error) {
      console.log(error);
      error();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="change-menu">
      <div className="change-header">
        <h3>Đổi Mật Khẩu</h3>
        <p>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </p>
      </div>
      <div className="change-body">
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Old Password"
            name="oldPass"
            rules={[
              {
                required: true,
                message: "Please input your Old Password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newPass"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Đổi mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ChangeMenu;
