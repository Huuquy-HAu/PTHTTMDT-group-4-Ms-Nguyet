import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { postAPI } from "../../../config/api";
import { message } from "antd";
import TruePhoneLogo from "../../image/TruePhone__1_-removebg-preview.png";
import TruePhoneLogoHeader from "../../image/TruePhone__2_-removebg-preview.png";

const success = () => {
  message.success({
    content: "This is a prompt message with custom className and style",
    className: "custom-class",
    style: {
      marginTop: "20vh",
    },
  });
};

function SignUp() {
  const nav = useNavigate();

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

  const onFinish = async (values) => {
    try {
      const email = document.querySelector("#email").value;
      const username = email.slice(0, email.indexOf("@"));

      const mailFormat =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const password = document.querySelector("#password").value;
      if (values.password !== values.confim) {
        message.error("Mật khẩu không khớp nhau !");
      } else if (!mailFormat.test(values.email)) {
        message.error("Email không hợp lệ !");
      } else if (password.length < 6) {
        message.error("Mật khẩu ít nhất phải 6 ký tự !");
      } else {
        const email = document.querySelector("#email").value;
        const username = email.slice(0, email.indexOf("@"));
        const password = document.querySelector("#password").value;
        let res = await postAPI("/auth/sign-up", { email, password, username });

        message.success("Tạo tài khoản thành công!");
        // hanleSubmit(values);
        nav("/signin");
      }
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function hanleSubmit() {
    // const email = document.querySelector("#email").value;
    // const username = email.slice(0, email.indexOf("@"));
    // const password = document.querySelector("#password").value;
    // let res = postAPI("/auth/sign-up", { email, password, username });
    // console.log(res, 88);
  }

  return (
    <div>
      <div className="container-signup">
        <div className="header-signup">
          <div className="header-signup-left">
            <a href="/">
              <img src={TruePhoneLogoHeader} alt="" />
            </a>
            <div className="header-dang-ky">Đăng ký</div>
          </div>
          <a
            className="signup-help"
            href="https://help.shopee.vn/vn/s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bạn cần giúp đỡ?
          </a>
        </div>

        <div className="content-signup">
          <div className="img-logo">
            <img src={TruePhoneLogo} alt="" />
          </div>
          <div className="form-dang-ky">
            <div className="content-dang-ky">Đăng ký</div>

            <div className="content-center">
              {/* <div className="phone-number">
                                       
                                        <input className="center-input" type="text" name="" id="" placeholder="Email"/>                            
                              </div> */}

              <button className="button-next" disabled="">
                <>
                  <Button
                    type="primary"
                    onClick={showModal}
                    className="button-next-signup"
                  >
                    ĐĂNG KÝ
                  </Button>
                  <Modal
                    footer={null}
                    title="FORM SIGN-UP"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Form
                      name="basic"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input id="email" placeholder="Email" />
                      </Form.Item>

                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password
                          id="password"
                          placeholder="Password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>

                      <Form.Item
                        name="confim"
                        rules={[
                          {
                            required: true,
                            message: "Please input your confim-password!",
                          },
                        ]}
                      >
                        <Input.Password
                          id="confim"
                          placeholder="Confim-Password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>

                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={hanleSubmit}
                      >
                        {" "}
                        Submit
                      </Button>
                    </Form>
                  </Modal>
                </>
              </button>

              <div class="duong-ke">
                <div class="ke-hr"></div>
                <span class="hoac">HOẶC</span>
                <div class="ke-hr"></div>
              </div>

              <div class="signup-icon">
                <button className="facebook">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                  />
                  <span>Facebook</span>
                </button>
                <button className="google">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                  <span>Google</span>
                </button>
              </div>

              <div className="ghi-chu">
                Bằng việc đăng kí, bạn đã đồng ý với TruePhone về <br />
                <a
                  href="https://shopee.vn/legaldoc/termsOfService/?__classic__=1"
                  className="dieu-khoan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Điều khoản dịch vụ
                </a>
                <span>&</span>
                <a
                  href="https://shopee.vn/legaldoc/privacy/?__classic__=1"
                  className="dieu-khoan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chính sách bảo mật
                </a>
              </div>
              <div className="cuoi-trang">
                <div className="tai-khoan"> Bạn đã có tài khoản?</div>
                <div className="dang-nhap">
                  <Link to="/signin">Đăng nhập</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
