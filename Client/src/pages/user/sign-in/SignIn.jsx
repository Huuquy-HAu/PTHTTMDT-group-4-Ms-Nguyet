import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { postAPI } from "../../../config/api";
import { getAPI } from "../../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/reducers/userReducer";
import TruePhoneLogo from "../../image/TruePhone__1_-removebg-preview.png";
import TruePhoneLogoHeader from "../../image/TruePhone__2_-removebg-preview.png";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function SignIn() {
  const user = useSelector(function (state) {
    return state.user;
  });
  //   let emaill = user.email;
  // let username = emaill.slice(0, emaill.indexOf('@'));
  //   console.log(emaill.slice(0, emaill.indexOf("@")), 455);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onFinish = async (values) => {
    try {
      let res = await postAPI("/auth/sign-in", values);
      setCookie("shope-b3", res.data.token, 30);
      const resp = await getAPI("/auth/get-loged-in-user");
      console.log(resp.data);
      const action = userLogin(resp.data.user);
      dispatch(action);
      nav("/");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="container-signin">
        <div className="header-signin">
          <div className="header-signin-left">
            <a href="/">
              <img src={TruePhoneLogoHeader} alt="" />
            </a>
            <div className="header-dang-ky">Đăng nhập</div>
          </div>
          <a
            className="signin-help"
            href="https://help.shopee.vn/vn/s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bạn cần giúp đỡ?
          </a>
        </div>

        <div className="content-signin">
          <div className="img-logo">
            <img src={TruePhoneLogo} alt="" />
          </div>
          <div className="form-dang-nhap">
            <div className="content-dang-nhap">Đăng nhập</div>

            <div className="content-center">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </div>
                <div style={{ width: "100%" }}>
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
                      placeholder="Password"
                      className="content-center-input"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="button-signin"
                >
                  Đăng Nhập
                </Button>
              </Form>

              <div className="forgot">
                <div className="forgot-password">
                  <a className="anLGcx" href="#">
                    Quên mật khẩu
                  </a>
                </div>
                <div className="signin-sms">
                  <a className="anLGcx" href="#">
                    Đăng nhập với SMS
                  </a>
                </div>
              </div>

              <div className="duong-ke">
                <div className="ke-hr"></div>
                <span className="hoac">HOẶC</span>
                <div className="ke-hr"></div>
              </div>

              <div className="signin-icon">
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
                <button className="apple">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png"
                    alt=""
                  />
                  <span>Apple</span>
                </button>
              </div>

              <div className="cuoi-trang">
                <div className="tai-khoan"> Bạn mới biết đến TruePhone?</div>
                <div className="dang-ky">
                  <Link to="/signup">Đăng ký</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
