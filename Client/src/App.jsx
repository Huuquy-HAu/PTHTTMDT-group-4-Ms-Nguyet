import "./App.css";
import React from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import Order from "./pages/admin/order/Order";
import "../src/pages/admin/order/order.css";
import UserMenu from "./components/userMenu/userMenu";
import UserProfile from "./components/userMenu/UserProfile";
import ChangeMenu from "./components/userMenu/ChangeMenu";
import SignIn from "./pages/user/sign-in/SignIn";
import SignUp from "./pages/user/sign-up/SignUp";
import ProductDetail from "./pages/user/productDetail/ProductDetail";
import UserPage from "./components/userPage/UserPage";
import AdminPage from "./components/adminPage/AdminPage";
import Cart from "./pages/user/cart/Cart";
import CreateOrder from "./pages/user/createOrder/CreateOrder";
import Home from "./pages/user/home/Home";
import OrderDetail from "./pages/user/orderDetail/OrderDetail";
import UserOrderHistory from "./pages/user/userOrderHistory/UserOrderHistory";
import Category from "./pages/admin/category/Category";
import AdminListProduct from "./pages/admin/product/adminListProduct/AdminListProduct";
import AddProductDetail from "./pages/admin/product/addProductDetail/AddProductDetail";
import AdminProfile from "./pages/admin/profile/AdminProfile";
import AdminListProductDetail from "./pages/admin/product/listProductDetail/AdminListProductDetail";
import product from "./static/Truong/product.json";
import order from "./static/Truong/order.json";
import user from "./static/Truong/user.json";
import productDetail from "./static/Truong/productDetail.json";
import FilterProduct from "./pages/user/filterProduct/FilterProduct";
import AdminOrderDetail from "./pages/admin/order/AdminOrderDetail";
import AddProduct from "./pages/admin/product/addProduct/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />}>
          <Route path="/" element={<Home product={product} />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/filter" element={<FilterProduct />} />
          <Route path="/user" element={<UserMenu />}>
            <Route path="/user" element={<UserProfile />} />
            <Route path="/user/changePassword" element={<ChangeMenu />} />
            <Route path="/user/order/:orderId" element={<OrderDetail />} />
            <Route
              path="/user/order"
              element={<UserOrderHistory></UserOrderHistory>}
            ></Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/profile" element={<AdminProfile />} />

          {/* trang liệt kê tất cả đơn hàng của hệ thống */}
          <Route path="/admin/order" element={<Order />} />

          {/* trang hiển thị chi tiết đơn hàng cho admin theo dõi */}
          <Route
            path="/admin/order/:orderId"
            element={
              <AdminOrderDetail
                order={order}
                user={user}
                productDetail={productDetail}
                product={product}
              />
            }
          />

          {/* trang hiển thị, thêm, sửa phân loại */}
          <Route path="/admin/category" element={<Category />} />

          {/* kho hàng */}
          <Route path="/admin/product" element={<AdminListProduct />} />

          {/* tạo sản phẩm */}
          <Route path="/admin/product/create" element={<AddProduct />} />

          {/* tạo biến thể của sản phẩm */}
          <Route
            path="/admin/product/:productId/detail/create"
            element={<AddProductDetail />}
          />

          {/* liệt kê các biến thể đang có của 1 sp cụ thể */}
          <Route
            path="/admin/product/:productId/detail"
            element={<AdminListProductDetail />}
          />

          {/* thông tin , đổi pass ... */}

        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
