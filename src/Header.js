import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to='/' style={{textDecoration:'none'}}>
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eSHOP</h2>
      </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchTwoToneIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="span navItemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="span navItemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />

            <span className="span navItemLineTwo nav__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
