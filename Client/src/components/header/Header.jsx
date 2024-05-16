import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../../config/axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/reducers/userReducer";
import { useSelector } from "react-redux";
import TruePhoneLogo from "../../pages/image/TruePhone__1_-removebg-preview.png";


function Header() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [uName, setUName] = useState("");
  let [checkAdmin, setCheckAdmin] = useState("");
  let data = useSelector(function (state) {
    return state;
  });


  function Login() {
    nav("/signin");
  }
  function Sigup() {
    nav("/signup");
  }
  function MyID() {
    nav("/user");
  }
  function LogOut() {
    let action = userLogin({});
    dispatch(action);
    nav("/");

    window.location.reload();

    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function Buy() {
    nav("");
  }
  function Admin() {
    if (checkAdmin === "user") {
      alert("Hãy đăng nhập tài khoản Admin");
    }
    if (checkAdmin === "admin") {
      nav("/admin");
    }
  }
  function filterLinkInput(event) {
    let search = document.querySelector(".header-seach-iput").value.trim();
    if (search.indexOf("") == !-1) {
      search = search.split(" ").join("");
    }
    if (event.charCode === 13) {
      nav(`/filter?search=${search}&page=1`);
    }
  }
  function filterLink() {
    let search = document.querySelector(".header-seach-iput").value.trim();

    if (search.indexOf("") == !-1) {
      search = search.split(" ").join("");
    }

    nav(`/filter?search=${search}&page=1`);
  }
  function MyProduct() {
    nav("/user/order");
  }

  async function CheckUser() {
    let tokenLocal = getCookie("shope-b3");
    if (tokenLocal) {
      try {
        let check = await instance.get("auth/get-loged-in-user", {
          headers: { Authorization: tokenLocal },
        });
      } catch (error) {
        let action = userLogin({});
        dispatch(action);
        data.user = {};
      }
    }
  }
  function nameUser() {
    let dataUs = JSON.parse(window.localStorage.getItem("user-shope"));
    if (!dataUs) dataUs = {};

    if (Object.keys(dataUs).length !== 0) {
      let classNone = document.querySelector(".header-top-right-id");
      classNone.setAttribute("id", "display");
      let name = dataUs.email.split("@");

      setUName(name[0]);
      setCheckAdmin(dataUs.role);
    } else if (Object.keys(dataUs).length === 0) {
      let ab = document.querySelector(".header-top-right-user");
      ab.setAttribute("id", "display");
      let classNone = document.querySelector(".header-top-right-id");
      classNone.setAttribute("id", "");

      setUName("");
    }
  }
  // CheckUser ()

  useEffect(() => {
    CheckUser();
    nameUser();
  }, [uName]);

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <p onClick={Admin}>Kênh Người Bán </p>
          <p>Tải Ứng Dụng </p>
          <p id="ud">Tải Ứng Dụng </p>
          <p id="kn">Kết Nối </p>
          <p className="ic">
            {" "}
            <span>
              <FacebookOutlined className="icon-fb" />
            </span>
            <span>
              <InstagramOutlined className="icon-itg" />
            </span>{" "}
          </p>
        </div>
        <dir className="header-top-right">
          <div className="header-top-right-icon">
            <p>
              {" "}
              <span>
                <BellOutlined />
              </span>
              Thông Báo{" "}
            </p>
            <p>
              <span>
                <QuestionCircleOutlined />
              </span>{" "}
              Hỗ Trợ{" "}
            </p>
          </div>
          <div className="header-top-right-id">
            <p onClick={Sigup}>Đăng kí </p>
            <p onClick={Login}>Đăng Nhập </p>
          </div>
          <div className="header-top-right-user">
            <div className="header-top-right-name">
              <p>
                <UserOutlined />
              </p>
              <p>{uName}</p>
            </div>
            <div className="header-top-right-name-hover">
              <ul className="list">
                <li onClick={MyID}>Tài Khoản Của Tôi</li>
                <li onClick={MyProduct}>Đơn Mua</li>
                <li onClick={LogOut}>Đăng Xuất</li>
              </ul>
            </div>
          </div>
        </dir>
      </div>

      <div className="header-seach">
        <a href="/">
          <div className="header-seach-logo">
            <img src={TruePhoneLogo} alt="" />
          </div>
        </a>
        <div className="header-seach-main">
          <input
            type="text"
            className="header-seach-iput"
            onKeyPress={filterLinkInput}
          />
          <button onClick={filterLink}>
            <SearchOutlined />
          </button>
        </div>
        <div className="header-seach-cart">
          <Link to={"/cart"}>
            {" "}
            <div className="icon-cart">
              {" "}
              <ShoppingCartOutlined />
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
