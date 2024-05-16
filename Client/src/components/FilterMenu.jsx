import React from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

function FilterMenu() {
  return (
    <div className="filter-menu">
      <div className="filter-menu-header">
        <FiFilter className="icon-filter" />
        <h2>BỘ LỌC TÌM KIẾM</h2>
      </div>

      {/* ==============THEO DANH MỤC================= */}
      <div className="filter-menu-list">
        <p>Theo Danh Mục</p>

        <div className="filter-item">
          <input type="checkbox" />
          <div>
            <span>Áo thun (253k+)</span>
          </div>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <div>
            <span>Thời Trang Trẻ Em (26+)</span>
          </div>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <div>
            <span>Bộ (13+)</span>
          </div>
        </div>

        <div className="add">
          Thêm
          <AiOutlineDown className="icon-add" />
        </div>
      </div>
      <div className="line"></div>
      {/* ==============THEO DANH MỤC (DONE)================= */}

      {/* ==============THEO THƯƠNG HIỆU================= */}
      <div className="filter-menu-list">
        <p>Theo Thương Hiệu</p>

        <div className="filter-item">
          <input type="checkbox" />
          <div>
            <span>Logitech</span>
          </div>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <div>
            <span>Yinxx</span>
          </div>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <div>
            <span>2S Clothing</span>
          </div>
        </div>

        <div className="add">
          Thêm
          <AiOutlineDown className="icon-add" />
        </div>
      </div>
      <div className="line"></div>
      {/* ==============THEO THƯƠNG HIỆU (DONE)================= */}

      {/* ==============THEO KHOẢNG GIÁ================= */}
      <div className="filter-menu-list">
        <p>Khoảng Giá</p>

        <div className="filter-item-price">
          <input type="text" placeholder="₫ TỪ" className="price" />
          <div className="price-line"></div>
          <input type="text" placeholder="₫ ĐẾN" className="price" />
        </div>
        <button className="price-btn">ÁP DỤNG</button>
      </div>
    </div>
  );
}

export default FilterMenu;
