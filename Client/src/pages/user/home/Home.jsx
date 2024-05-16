import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import "./Home.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Pagination } from "antd";
import { CheckOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { getAPI } from "../../../config/api";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  height: "238px",
  borderRadius: "4px",
};

function Home() {
  const nav = useNavigate();
  const [showDataPage, setShowDataPage] = useState([]);
  const [showPagination, setShowPagination] = useState(false);
  const [showBtnSeeMore, setShowBtnSeeMore] = useState(true);
  const [showHeaderProduct, setShowHeaderProduct] = useState(true);
  const [listProduct, setListProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(0);
  const [category, setCategory] = useState([]);

  const search = useLocation();
  let objectSearch = { page: 1, pageSize: 10 };
  let page = 0;
  if (search.search) {
    const querry = search.search.slice(1).split("&");
    page = querry[0].split("=")[1];
    querry.map((item) => {
      const key = item.split("=")[0];
      const value = item.split("=")[1];
      objectSearch[key] = +value;
      return objectSearch;
    });
  }

  useEffect(() => {
    async function getData() {
      try {
        let products = await getAPI("/product/get-all-products");
        let categories = await getAPI("/category/get-all-categories");
        setListProduct(products.data.products);
        setCategory(categories.data.categories);
        setShowDataPage(
          products.data.products.slice(
            (objectSearch.page - 1) * objectSearch.pageSize,
            objectSearch.page * objectSearch.pageSize
          )
        );
        if (search.search) {
          setShowPagination(true);
          setShowBtnSeeMore(false);
          setShowHeaderProduct(false);
          setPageCurrent(page);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [count]);

  const changePage = (id) => {
    nav("/product-detail/" + id);
  };
  let refCarousel = useRef(null);
  const handlePrevSlider = () => {
    refCarousel.prev();
  };

  const handleNextSlider = () => {
    refCarousel.next();
  };

  const onShowSizeChange = (current, pageSize) => {
    let start = (current - 1) * pageSize;
    let stop = current * pageSize;
    setShowDataPage(listProduct.slice(start, stop));
    nav(`?page=${current}&pageSize=${pageSize}`);
    setCount((pre) => pre + 1);
  };

  const changePageFilter = (categori) => {
    nav(`/filter?categori=${categori}&page=1`)
  }

  return (
    <div className="home_container">
      <div className="home_body">
        <div className="home_banner">
          <div className="home_banner-left">
            <button className="home_banner-left-btn" onClick={handlePrevSlider}>
              <LeftOutlined />
            </button>
            <Carousel autoplay ref={(node) => (refCarousel = node)}>
              <div>
                <div style={contentStyle}>
                  <img
                    className="home_banner-left-img"
                    src="	https://cf.shopee.vn/file/4934a289e707bf4e3f0b4ff15da34bb5_xxhdpi"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    className="home_banner-left-img"
                    src="	https://cf.shopee.vn/file/da1bd3e75f73fe83efe5c3f852359c34_xxhdpi"
                    alt=""
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    className="home_banner-left-img"
                    src="		https://cf.shopee.vn/file/74f86a460aeca99ca43d6863e1f039ae_xxhdpi"
                    alt=""
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    className="home_banner-left-img"
                    src="		https://cf.shopee.vn/file/c16de52f3676f7aef4456acd862d3816_xxhdpi"
                    alt=""
                  />
                </h3>
              </div>
            </Carousel>
            <button
              className="home_banner-right-btn"
              onClick={handleNextSlider}
            >
              <RightOutlined />
            </button>
          </div>
          <div className="home_banner-right">
            <img
              src="https://cf.shopee.vn/file/50ef5b6c39d141b1163eee8261c6b99b_xhdpi"
              alt="banner"
            />
            <img
              src="https://cf.shopee.vn/file/d30cf192dab75d7df1320bff5902ed0a_xhdpi"
              alt="banner"
            />
          </div>
        </div>
        <div className="home_navbar">
          {category.map((item) => {
            return (
              <div className="home_navbar-item" onClick={()=>{
                
                changePageFilter(item.categoryName)
              }}>
                <div className="home_navbar-item-img">
                  <img
                    src={"https://shope-b3.thaihm.site/" + item.thumbnail}
                    alt=""
                  />
                </div>
                <p>{item.categoryName}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home_product">
        <div className="home_product-body">
          {showHeaderProduct ? (
            <div className="home_product-header">
              <div
                className="home_product-heading tab-active"
                onClick={() => {
                  const tab1 = document.querySelector(".home_product-heading");
                  const tab2 = document.querySelector(".home_product-img");
                  tab2.classList.remove("tab-active");
                  tab1.classList.add("tab-active");
                }}
              >
                <h2>GỢI Ý HÔM NAY</h2>
              </div>
              <div
                className="home_product-img"
                onClick={() => {
                  const tab1 = document.querySelector(".home_product-heading");
                  const tab2 = document.querySelector(".home_product-img");
                  tab2.classList.add("tab-active");
                  tab1.classList.remove("tab-active");
                }}
              >
                <img
                  src="	https://cf.shopee.vn/file/e7a16381114a34167549a2dc88ccccdb"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="user_home-all-container">
              <button className="user_home-all-btn">Tất cả</button>
            </div>
          )}
          <div className="home_product-list-product">
            {showDataPage.map((item, index) => {
              return (
                <Link
                  to={"/product-detail/" + item._id}
                  className="home_product-item-link"
                >
                  <div
                    className="home_product-item"
                    onClick={() => changePage(item._id)}
                  >
                    <img
                      src={
                        item.thumbnail.startsWith("https")
                          ? item.thumbnail
                          : "https://shope-b3.thaihm.site/" + item.thumbnail
                      }
                      alt=""
                    />
                    <h2>{item.productName}</h2>
                    <div className="home_product-item-text">
                      <span>
                        {item.price
                          ? item.price.toLocaleString() + " " + "₫"
                          : "Sản phẩm hiện tại chưa có giá"}
                      </span>
                    </div>
                    <div className="home_product-item-box">
                      Tìm sản phẩm tương tự
                    </div>
                    <div className="home_product-item-favorite">
                      <CheckOutlined />
                      <span>Yêu thích</span>
                    </div>
                    <div className="home_product-item-sale">
                      <p className="home_product-item-sale-percent">43%</p>
                      <p className="home_product-item-sale-label">GIẢM</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {showPagination ? (
          <Pagination
            showSizeChanger={false}
            onChange={onShowSizeChange}
            defaultCurrent={pageCurrent <= 1 ? 2 : pageCurrent}
            total={listProduct.length}
            pageSize={objectSearch.pageSize}
            style={{ margin: "20px 0" }}
          />
        ) : (
          ""
        )}

        {showBtnSeeMore && listProduct.length > objectSearch.pageSize ? (
          <div className="home_product-seemore-btn">
            <button
              onClick={() => {
                setCount((pre) => pre + 1);
                setShowPagination(true);
                setShowBtnSeeMore(false);
                setShowHeaderProduct(false);
                nav(`?page=${2}&pageSize=${10}`);
              }}
            >
              Xem thêm
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
