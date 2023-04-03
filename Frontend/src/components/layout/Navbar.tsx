import React, { useState } from "react";
import styles from "./Layout.module.scss";
import Theme from "../Theme/Theme";
import AuthLogo from "./AuthLogo";
import { CgMenuRound } from "react-icons/cg";
import MainComponents from "../search/MainComponents";
import { HiOutlineSearchCircle } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const body = document.querySelector("body");

  body?.addEventListener("click", () => {
    setShow(false);
  });
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-wrap"]}>
        <h1>
          Roomsy <span>&#169;</span>
        </h1>

        <div className={styles["nav-menu"]}>
          {!show && (
            <HiOutlineSearchCircle
              onClick={(e) => {
                setShow(true), e.stopPropagation();
              }}
            />
          )}
          {show && <MainComponents />}
          <Theme />
          <AuthLogo />
        </div>

        <div className={styles["nav-mobile-menu"]}>
          <Theme />
          <CgMenuRound
            size={30}
            cursor="pointer"
            color={"var(--main-font-color)"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
