import React from 'react'
import "./Center.scss"
export default function Center() {
  return (
    <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="grid">
    <div className="grid__row">
      <div className="grid__column-2">
        <nav className="category">
          <h3 className="category_heading">
            <i className="category_heading-icon fas fa-list" />
            Danh mục sản phẩm
          </h3>
          <ul className="category-list">
            <li className="category-item category-item--active">
              <a id="all" className="category-item__link">
                Tất cả sản phẩm
              </a>
            </li>
            <li className="category-item category-item">
              <a id="thietBiDienTu" className="category-item__link">
                Thiết bị điện tử
              </a>
            </li>
            <li className="category-item">
              <a id="sach" className="category-item__link">
                Sách
              </a>
            </li>
            <li className="category-item">
              <a id="doTieuDung" className="category-item__link">
                Đồ tiêu dùng
              </a>
            </li>
            <li className="category-item">
              <a id="thoiTrang" className="category-item__link">
                Thời trang
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid__column-10">
        <div className="product">
          <div id="product_items" className="grid__row">
            {/* Product item */}
            {/* <div class="grid__column-2-4">
                <a class="product-item" href=#>
                    <div class="product-item_img" style="background-image: url(https://www.viendongmobile.com/vnt_upload/product/07_2020/Untitled-1.png);"></div>
                    <h4 class="product-item_name">Iphone 12 Pro Max</h4>
                    <div class="product-item_price">30.000.000đ</div>
                    <div class="product-item_action">
                         <span class="product-item_like">
                            <i class="far fa-heart"></i>
                        </span>
                        <div class="product-item_rating">
                            <i class="product-item_star-gold fas fa-star"></i>
                            <i class="product-item_star-gold fas fa-star"></i>
                            <i class="product-item_star-gold fas fa-star"></i>
                            <i class="product-item_star-gold fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="product-item_sold">50 đã bán</span>
                    </div>
                    <div class="product-item_origin">
                        <span class="product-item_brand">Apple</span>
                        <span class="product-item_place">Hà Nội</span>
                    </div>
                </a>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
