import "./Shop.scss"
export default function Shop() {
  return (
    <header className="header">
  <ul className="header-items">
    <li className="header-item">
      <a href="" className="header-item-link logo">
        Rikkei_Shop
      </a>
    </li>
    <li className="header-item">
      <input
        className="search-bar"
        type="search"
        placeholder="Nhập để tìm kiếm"
      />
      <button className="search-icon">
        <i className="fas fa-search" />
      </button>
    </li>
    <li className="header-item">
      <a href="" className="header-item-link header-cart">
        <i className="header-cart-icon fas fa-shopping-cart" />
        Giỏ hàng
      </a>
    </li>
    <li className="header-item">
      <a
        className="header-item-link header-login"
      >
        Đăng nhập
      </a>
    </li>
    <li className="header-item">
      <a
        className="header-item-link header-signup"
      >
        Đăng ký
      </a>
    </li>
  </ul>
</header>
  )
}
