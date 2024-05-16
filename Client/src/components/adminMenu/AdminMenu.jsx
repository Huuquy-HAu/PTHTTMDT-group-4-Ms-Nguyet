import React from "react";
import { ShoppingOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "./AdminMenu.css";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Quản lí sản phẩm", "sub2", <ShoppingOutlined />, [
    getItem(<Link to={"/admin/product"}>Tất Cả Sản Phẩm</Link>, "5"),
    getItem(<Link to={"/admin/product/create"}>Thêm sản phẩm</Link>, "6"),
  ]),
  getItem("Quản lí đơn hàng", "sub3", <SettingOutlined />, [
    getItem(<Link to={"/admin/order"}>Tất cả đơn hàng</Link>, "8"),
    getItem(<Link to={"/admin/category"}>Quản lý phân loại</Link>, "9"),
  ]),
  getItem("Quản lí hồ sơ", "sub4", <SettingOutlined />, [
    getItem(<Link to={"/admin/profile"}>Trang cá nhân</Link>, "7"),
  ]),
];

function AdminMenu() {
  return (
    <div className="menu-admin">
      <Menu
        style={{
          width: "20%",
          position: "fixed",
          left: "0",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}

export default AdminMenu;
