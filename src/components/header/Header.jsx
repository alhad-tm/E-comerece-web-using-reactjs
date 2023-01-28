import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const Header = () => {
  const mobilescreen = window.innerWidth <= 768 ? true : false;
  const [showMenu, setShowMenu] = useState(false);

  //  const toggleMenu=()=>{
  //   setShowMenu((showMenu)=>!showMenu)
  //  }

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Iconic Skin Care</span>
      </div>

      <div className={css.right}>
        <div className={css.bars}>
          {(mobilescreen === true) & (showMenu === false) ? (
            <GoThreeBars onClick={() => setShowMenu(true)} />
          ) : (
            <ul className={css.menu}>
              <li onClick={() => setShowMenu(false)}>Collections</li>
              <li onClick={() => setShowMenu(false)}>Brands</li>
              <li onClick={() => setShowMenu(false)}>New</li>
              <li onClick={() => setShowMenu(false)}>Sales</li>
              <li onClick={() => setShowMenu(false)}>ENG</li>
            </ul>
          )}
        </div>

        <input type="text" className={css.search} placeholder="search" />

        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
