import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import "./AdminPage.css";
import TruePhoneHeader from '../../pages/image/TruePhone__2_-removebg-preview.png'

function AdminPage() {
  const user = useSelector(function (state) {
    return state.user;
  });
  // let data = window.localStorage.getItem('user-shope')
  let link = user.avatar;

  const domain = "http://localhost:8080/";
  if (!link.startsWith("https")) {
    link = domain + link;
  }

  return (
    <div className="AdminPage">
      <div className="adminPage-header">
        <div className="adminPage-header-left">
          <Link to={"/"} >
            <img src={TruePhoneHeader} style={{width: '50px'}} alt="" />
          </Link>
          <Link to={"/"}>
            <h1>Trang chủ</h1>
          </Link>
          <svg
            className="svg2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"></path>
          </svg>
          <h2>Admin</h2>
        </div>
        <div className="adminPage-header-right">
          <Link to={"/admin/profile"}>
            <div className="header-right-profile">
              <img
                src={
                  link
                    ? link
                    : "https://64.media.tumblr.com/970f8c9047f214078b5b023089059228/4860ecfa29757f0c-62/s640x960/9578d9dcf4eac298d85cf624bcf8b672a17e558c.jpg"
                }
                alt=""
              />
              <p>{user.email ? user.email : "Đang cập nhật"}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="adminPage-body">
        <div className="adminPage-left">
          <AdminMenu></AdminMenu>
        </div>
        <div className="adminPage-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
