import React from "react";
import {
  Col,
  Row,
  Carousel,
  PageHeader,
  Descriptions,
  Radio,
  Tag,
  Button,
  Select,
  Image,
  message,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import "./productDetail.css";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import product from "../../../static/Truong/product.json";
import { getAPI, patchAPI } from "../../../config/api";
import { instance } from "../../../config/axios";
import { Pagination } from "antd";
import { CheckOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
// Select

function ProductDetail() {
  const { productId } = useParams();
  let [inputpd, setInputpd] = useState(1);
  let [like, setLike] = useState(200);
  const [productDetailData, setProductDetailData] = useState([]);
  const [productDetailCheck, setProductDetailCheck] = useState([]);
  const [productDetailID, setProductDetailID] = useState();
  const [count, setCount] = useState(0);

  // get value option
  const [pdColor, setpdColor] = useState();
  const [pdRam, setpdRam] = useState();
  const [pdRom, setpdRom] = useState();
  const [list4Img, setList4Img] = useState([]);
  const [listAllImg, setListAllImg] = useState([]);
  const [pdImg, setPdImg] = useState("");
  // getAPI
  const routes = [
    {
      path: "index",
      breadcrumbName: "Trang chủ",
    },
    {
      path: "first",
      breadcrumbName: "Product Detail",
    },
    {
      path: "second",
      breadcrumbName: `${productId}`,
    },
  ];
  async function getAPIproductDetail() {
    try {
      let products = await getAPI(`product/get-one-product/${productId}`);
      setProductDetailPrice(products.data.product.price);
      setProductDetailData([products.data.product]);
      setProductDetailCheck(products.data.product.listDtail);
      get4imgProductDetail([products.data.product][0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function addToCart() {
    try {
      let addToCart = await patchAPI(`/cart/add-to-cart`, {
        productDetailId: productDetailID,
        quantity: inputpd,
      });
      if (addToCart.status == 200) {
        message.success("Thêm vào giỏ hàng thành công !");
      } else {
        message.error("Thêm vào giỏ hàng thất bại !");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // set product price
  const [productDetailPrice, setProductDetailPrice] = useState("");

  function formatPdPrice(price) {
    if (price) {
      let str = price.toLocaleString() + "đ";
      return str;
    } else {
      return "Hết hàng!";
    }
  }
  // set price
  function setPrice1(value) {
    let color = value.target.value;
    setpdColor(color);
    getPrice(color, pdRam, pdRom);
  }
  function setPrice2(value) {
    let ram = value.target.value;
    setpdRam(ram);
    getPrice(pdColor, ram, pdRom);
  }
  function setPrice3(value) {
    let rom = value.target.value;
    setpdRom(rom);
    getPrice(pdColor, pdRam, rom);
  }

  function getPrice(pdColor, pdRam, pdRom) {
    if (pdColor && pdRam && pdRom) {
      let arrPrice = productDetailCheck.find((value) => {
        return (
          value.color == pdColor && value.ram == pdRam && value.rom == pdRom
        );
      });
      if (!arrPrice) {
        return setProductDetailPrice("");
      }
      setProductDetailID(arrPrice._id);
      setProductDetailPrice(arrPrice.price);
    }
  }
  //  Chức năng tương tác

  function like1() {
    let heart = document.querySelector(".fa-heart");

    if (like % 2 == 0) {
      setLike(like + 1);
      heart.setAttribute("style", "color:red");
    } else {
      setLike(like - 1);
      heart.setAttribute("style", "color:aqua");
    }
  }

  function tang() {
    setInputpd(inputpd + 1);
  }
  function giam() {
    setInputpd(inputpd - 1);
    if (inputpd <= 0) {
      setInputpd(0);
    }
  }

  function get4imgProductDetail(data) {
    let list4ImgClone = [];
    // console.log(160, getListImgProductDetail());
    let list = getListImgProductDetail(data);
    for (let i = 0; i <= 3; i++) {
      list4ImgClone.push(list[i]);
    }
    // console.log(164, list4ImgClone[0]);
    setPdImg(list4ImgClone[0]);
    setList4Img(list4ImgClone);
  }

  function OnMEnterImg(linkImg) {
    setPdImg(linkImg);
  }
  // useEffect
  useEffect(() => {
    getAPIproductDetail();
  }, []);

  // get list img product detail
  function getListImgProductDetail(data) {
    let listImg = [];
    data.listDtail.map((value, index) => {
      value.listImg.map((val) => {
        listImg.push(val);
      });
    });
    setListAllImg(listImg);
    return listImg;
  }
  // Model
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // carourel
  let refCarousel = useRef(null);
  const handlePrevSlider = () => {
    refCarousel.prev();
  };

  const handleNextSlider = () => {
    refCarousel.next();
  };
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    height: "238px",
    borderRadius: "4px",
  };
  return (
    <div className="product-detail">
      {productDetailData.map((value, index) => {
        return (
          <div className="product-detail-body">
            <Row justify="center">
              <Col lg={16} md={16}>
                <PageHeader
                  className="site-page-header"
                  breadcrumb={{
                    routes,
                  }}
                />
              </Col>
            </Row>
            <Row justify="center">
              <Col lg={6} md={8} xs={24}>
                <div className="product-detail-left">
                  <div className="product-detail-img">
                    <img
                      onClick={showModal}
                      width={`100%`}
                      src={`https://shope-b3.thaihm.site/${pdImg}`}
                    />
                  </div>
                  <div className="product-detail-list-img">
                    {list4Img.map((value) => {
                      return (
                        <div>
                          <img
                            src={`https://shope-b3.thaihm.site/${value}`}
                            alt=""
                            onClick={showModal}
                            onMouseEnter={() => {
                              setPdImg(value);
                            }}
                          />
                        </div>
                      );
                    })}
                    <div className="pd-modal-item">
                      <Modal
                        visible={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                      >
                        <div className="product-detail-modal">
                          <div className="product-detail-carourel-left">
                            <button
                              className="product-detail-carourel-left-btn"
                              onClick={handlePrevSlider}
                            >
                              <LeftOutlined />
                            </button>
                            <Carousel ref={(node) => (refCarousel = node)}>
                              {listAllImg.map((value) => {
                                return (
                                  <div>
                                    <h3 style={contentStyle}>
                                      <img
                                        className="product-detail-carourel-left-img"
                                        src={`https://shope-b3.thaihm.site/${value}`}
                                        alt=""
                                      />
                                    </h3>
                                  </div>
                                );
                              })}
                            </Carousel>
                            <button
                              className="product-detail-carourel-right-btn"
                              onClick={handleNextSlider}
                            >
                              <RightOutlined />
                            </button>
                          </div>

                          <div className="product-detail-modal-listimg">
                            {listAllImg.map((value) => {
                              return (
                                <div className="product-detail-modal-img">
                                  <Image
                                    src={`https://shope-b3.thaihm.site/${value}`}
                                    className="pd-item-img"
                                    width={80}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={10} md={12} xs={24}>
                <div className="product-detail-right">
                  <div className="product-detail-title">
                    <h2> {value.productName}</h2>
                  </div>
                  <div className="product-detail-rank">
                    <div className="product-detail-rank-item">
                      <span className="product-detail-item1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                      </span>
                    </div>
                    <div className="product-detail-rank-item">
                      <span className="product-detail-item2">Đánh giá</span>
                    </div>
                    <div className="product-detail-rank-item3">
                      <span>Đã bán</span>
                    </div>
                  </div>
                  <div className="product-detail-price">
                    <Descriptions bordered>
                      <Descriptions.Item
                        label={formatPdPrice(productDetailPrice)}
                      ></Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="prodtuct-detail-color">
                    <Descriptions>
                      <Descriptions.Item label="Màu Sắc">
                        <Radio.Group
                          defaultValue="a"
                          buttonStyle="solid"
                          onChange={setPrice1}
                        >
                          {productDetailCheck
                            .filter((value, index, arr) => {
                              return value.status === "enable";
                            })
                            .filter((value2, index, array) => {
                              return (
                                index ===
                                array.findIndex(
                                  (value3) => value3.color === value2.color
                                )
                              );
                            })
                            .map((val, index) => {
                              return (
                                <Radio.Button value={val.color}>
                                  {val.color}
                                </Radio.Button>
                              );
                            })}
                        </Radio.Group>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="prodtuct-detail-stroge">
                    <Descriptions>
                      <Descriptions.Item label="RAM">
                        <Radio.Group
                          defaultValue="a"
                          buttonStyle="solid"
                          onChange={setPrice2}
                        >
                          {productDetailCheck
                            .filter((value, index, arr) => {
                              return value.status === "enable";
                            })
                            .filter((value2, index, array) => {
                              return (
                                index ===
                                array.findIndex(
                                  (value3) => value3.ram === value2.ram
                                )
                              );
                            })
                            .map((val, index) => {
                              return (
                                <Radio.Button value={val.ram}>
                                  {val.ram}
                                </Radio.Button>
                              );
                            })}
                        </Radio.Group>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="prodtuct-detail-stroge">
                    <Descriptions>
                      <Descriptions.Item label="ROM">
                        <Radio.Group
                          defaultValue="a"
                          buttonStyle="solid"
                          onChange={setPrice3}
                        >
                          {productDetailCheck
                            .filter((value, index, arr) => {
                              return value.status === "enable";
                            })
                            .filter((value2, index, array) => {
                              return (
                                index ===
                                array.findIndex(
                                  (value3) => value3.rom === value2.rom
                                )
                              );
                            })
                            .map((val, index) => {
                              return (
                                <Radio.Button value={val.rom}>
                                  {val.rom}
                                </Radio.Button>
                              );
                            })}
                        </Radio.Group>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="prodtuct-detail-address">
                    <Descriptions>
                      <Descriptions.Item label="Vận chuyển">
                        <span>
                          <i class="fa-solid fa-truck-moving"></i> Địa chỉ:{" "}
                          <span> A4 BT3 214 Nguyễn Xiển Thanh Xuân Hà Nội</span>
                        </span>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div className="product-detail-quantity">
                    <Descriptions>
                      <Descriptions.Item label="Số lượng">
                        <Button type="primary" onClick={giam}>
                          -
                        </Button>
                        <input placeholder="Basic usage" value={inputpd} />
                        <Button type="primary" onClick={tang}>
                          +
                        </Button>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                </div>
              </Col>
            </Row>
            <Row justify="center">
              <Col lg={6} md={9} xs={22}></Col>
              <Col lg={10} md={9} xs={24}>
                <div className="product-detail-add">
                  <Button
                    danger
                    className="pd-add-gh pd-btn-add-cart"
                    onClick={addToCart}
                  >
                    {" "}
                    <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                  </Button>
                  <Button
                    type="primary"
                    danger
                    className="pd-add-mh pd-btn-add-cart"
                  >
                    Mua Ngay
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetail;
