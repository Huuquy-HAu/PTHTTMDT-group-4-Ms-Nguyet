import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "antd";
import "./Category.css";
import { getAPI, patchAPI, postAPI } from "../../../config/api";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Pagination } from "antd";
import { Image } from "antd";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

function Category() {
  let [num, setNum] = useState(0);

  // Get category
  const [items, setItems] = useState([]);

  // Get products
  const [listProduct, setListProduct] = useState([]);
  const [showDataPage, setShowDataPage] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(0);

  // Modal add category
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [nameCategory, setNameCategory] = useState("");

  // Modal update category name
  const [nameUpdateCategory, setNameUpdateCategory] = useState("");

  // Upload img && name category
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [dataUpload, setDataUpload] = useState(new FormData());
  const [dataUpdateUpload, setDataUpdateUpload] = useState(new FormData());
  const [idUpdate, setIdUpdate] = useState("");

  const [quantityCategory, setQuantityCategory] = useState([]);

  const search = useLocation(),
    nav = useNavigate();
  let objectSearch = { page: 1, pageSize: 10 },
    page = 0;

  const getInfoSearch = () => {
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
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await getAPI("/category/get-all-categories");
        let products = await getAPI("/product/get-all-products");
        setListProduct(products.data.products);
        setItems(data.data.categories);
        getInfoSearch();
        setShowDataPage(
          data.data.categories.slice(
            (objectSearch.page - 1) * objectSearch.pageSize,
            objectSearch.page * objectSearch.pageSize
          )
        );
        if (search.search) {
          setPageCurrent(page);
        }
        const new_categories = data.data.categories.map((category) => {
          const countCategory = products.data.products.filter(
            (product) => product.categoryId._id === category._id
          ).length;
          return {
            ...category,
            count: countCategory,
          };
        });
        setQuantityCategory(new_categories);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [num]);

  const showModal = () => {
    setNameCategory("");
    setDataUpload(new FormData());
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    if (nameCategory) {
      dataUpload.append("categoryName", nameCategory);
      await postAPI("/category/create-category", dataUpload);
      setNum((pre) => pre + 1);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (info) => {
    const formData = new FormData();
    formData.append("thumb", info.file.originFileObj);
    setDataUpload(formData);
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };

  const showModalUpdate = (id, name) => {
    setNameUpdateCategory(name);
    setDataUpdateUpload(new FormData());
    setIdUpdate(id);
    setIsModalUpdateOpen(true);
  };

  const handleUpdateOk = async () => {
    if (nameUpdateCategory) {
      dataUpdateUpload.append("categoryName", nameUpdateCategory);
      await patchAPI("/category/update-category/" + idUpdate, dataUpdateUpload);
      setNum((pre) => pre + 1);
      setIsModalUpdateOpen(false);
    }
  };

  const handleCancelUpdate = () => {
    setIsModalUpdateOpen(false);
  };

  const handleChangeUpdate = (info) => {
    const formData = new FormData();
    formData.append("thumb", info.file.originFileObj);
    setDataUpdateUpload(formData);
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // Update pagination
  const onShowSizeChange = (current, pageSize) => {
    let start = (current - 1) * pageSize;
    let stop = current * pageSize;
    setShowDataPage(items.slice(start, stop));
    nav(`?page=${current}&pageSize=${pageSize}`);
    setNum((pre) => pre + 1);
  };

  return (
    <div className="admin-category-container">
      {/* HEADER */}
      <div className="admin-category-header">
        {/* HEADER RIGHT */}
        <div className="admin-category-header-right">
          <div className="admin-category-header-right-addProduct">
            <button onClick={showModal}>
              <AiOutlinePlus />
              Thêm 1 phân loại mới
            </button>
          </div>
        </div>
      </div>
      {/* HEADER DONE*/}

      {/* BODY */}
      <div className="admin-category-body">
        {/* BODY FIRST */}
        <div className="admin-category-body-heading">
          <div>Ảnh phân loại</div>
          <div>Tên phân loại</div>
          <div>Tồn kho</div>
          <div>Thao tác</div>
        </div>
        {/* BODY FIRST DONE */}

        {/* BODY SECOND */}
        <div className="admin-category-body-listItems">
          {showDataPage
            ? showDataPage.map((item) => {
                return (
                  <div className="admin-category-body-item" key={item._id}>
                    <div className="admin-category-item-img">
                      <Image
                        width={"100%"}
                        src={"https://shope-b3.thaihm.site/" + item.thumbnail}
                      />
                    </div>

                    <div className="admin-category-item-name">
                      <p>{item.categoryName}</p>
                    </div>

                    <div className="admin-category-item-store">
                      <p>
                        {quantityCategory.map((value) => {
                          if (value._id === item._id) {
                            return value.count;
                          }
                        })}
                      </p>
                    </div>

                    <div className="admin-category-item-handle">
                      <button
                        className="admin-category-item-handle-update"
                        onClick={() =>
                          showModalUpdate(item._id, item.categoryName)
                        }
                      >
                        Sửa
                      </button>
                    </div>
                  </div>
                );
              })
            : "No data"}
        </div>
        {/* BODY SECOND DONE */}
      </div>
      {/* BODY DONE */}

      {/* Pagination */}
      <Pagination
        onChange={onShowSizeChange}
        current={1}
        pageSize={objectSearch.pageSize}
        total={items.length}
      />

      {/* MODAL ADD */}
      <Modal
        title="Thêm phân loại"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          id="admin_category-modal-name"
          value={nameCategory}
          placeholder="Tên phân loại"
          onChange={(e) => setNameCategory(e.target.value)}
        />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </Modal>
      {/* MODAL ADD DONE */}
      {/* MODAL UPDATE */}
      <Modal
        title="Sửa phân loại"
        visible={isModalUpdateOpen}
        onOk={handleUpdateOk}
        onCancel={handleCancelUpdate}
      >
        <input
          type="text"
          id="admin_category-modal-name"
          value={nameUpdateCategory}
          placeholder="Tên phân loại"
          onChange={(e) => setNameUpdateCategory(e.target.value)}
        />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChangeUpdate}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </Modal>
      {/* MODAL UPDATE DONE */}
    </div>
  );
}
export default Category;
