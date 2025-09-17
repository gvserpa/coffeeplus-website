import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header>
      <div className="header">
        <div className="logo">CoffeePLUS</div>
        <div className="menu-nav">
          <ul>
            <li
              className={activeMenu === "home" ? "active" : ""}
              onClick={() => setActiveMenu("home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={activeMenu === "products" ? "active" : ""}
              onClick={() => setActiveMenu("products")}
            >
              <Link to="/">Products</Link>
            </li>
            <li
              className={activeMenu === "about" ? "active" : ""}
              onClick={() => setActiveMenu("about")}
            >
              <Link to="/">About us</Link>
            </li>
            <li
              className={activeMenu === "contact" ? "active" : ""}
              onClick={() => setActiveMenu("contact")}
            >
              <Link to="/">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="menu-btns">
          <button className="signup">Sign up</button>
          <button className="login">Log in</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
