import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="" className="header__logo">
          SmartSpace
        </a>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Service
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Portfolio
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Blog
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
