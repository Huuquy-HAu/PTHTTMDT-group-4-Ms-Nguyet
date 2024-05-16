import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import "./AdminPage.css";

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
          <Link to={"/"}>
            <svg
              className="svg1"
              viewBox="0 0 113 126"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.968 94.081c-.741 6.073-4.447 10.939-10.187 13.374-3.194 1.356-7.476 2.086-10.871 1.856-5.279-.2-10.241-1.478-14.812-3.809-1.664-.848-4.104-2.525-5.943-4.058-.42-.348-.635-.66-.232-1.228.43-.645 2.13-3.102 2.398-3.507.362-.552.956-.58 1.5-.153.075.057.628.486.74.569 4.4 3.423 10.076 5.994 16.384 6.235 7.955-.108 13.726-3.65 14.757-9.136 1.135-6.046-3.69-11.231-12.98-14.124-2.953-.92-10.38-3.872-11.75-4.672-6.474-3.77-9.488-8.717-9.058-14.807.657-8.438 8.534-14.762 18.53-14.804 4.744-.01 9.194 1.036 13.159 2.695 1.459.61 4.176 2.066 5.145 2.785.677.494.625 1.046.358 1.474-.395.656-1.57 2.483-2.043 3.245-.345.523-.773.583-1.38.2-5.112-3.41-10.37-4.567-15.103-4.661-6.828.134-11.978 4.165-12.316 9.691-.09 4.992 3.729 8.613 11.833 11.378C71.83 77.964 78.17 84.24 76.968 94.08zM56.32 7.34c10.83 0 19.66 10.208 20.073 22.986H36.248C36.66 17.548 45.489 7.34 56.32 7.34zM97.44 125.687c5.72-.155 10.355-4.776 10.844-10.504l.037-.692 4.05-81.638v-.001a2.402 2.402 0 0 0-2.4-2.526H83.95C83.312 13.454 71.185 0 56.32 0 41.455 0 29.33 13.454 28.69 30.326H2.632a2.402 2.402 0 0 0-2.35 2.588H.28l3.696 81.319.055 1.02c.564 5.658 4.7 10.215 10.322 10.425h.002l82.669.013.414-.004z"
                fill-rule="evenodd"
              ></path>
            </svg>
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
