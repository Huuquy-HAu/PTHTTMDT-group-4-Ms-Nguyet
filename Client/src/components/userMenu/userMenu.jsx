import React, { useEffect } from "react";
import MenuProfile from "./MenuProfile";
import { Outlet, useNavigate } from "react-router-dom";
import "./usermenu.css";
import { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { getAPI } from "../../config/api";

function UserMenu() {
  const [check, setCheck] = useState(false);
  const nav = useNavigate();

  const checkLogin = async () => {
    try {
      let res = await getAPI("auth/get-loged-in-user");
      setCheck(true);
    } catch (error) {
      console.log(error);
      nav("/");
      notification.open({
        message: "Bạn chưa đăng nhập !!",
        description: "Hãy đăng nhập lại rồi thử lại nhé",
        icon: (
          <SmileOutlined
            style={{
              color: "#108ee9",
            }}
          />
        ),
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="user-menu">
      {check ? (
        <div className="container">
          <MenuProfile />
          <Outlet />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default UserMenu;
