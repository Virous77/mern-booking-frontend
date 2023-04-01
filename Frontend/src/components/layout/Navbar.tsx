import React from "react";
import styles from "./Layout.module.scss";
import Search from "../search/Search";
import Theme from "../Theme/Theme";
import AuthLogo from "./AuthLogo";
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-wrap"]}>
        <h1>
          Roomsy <span>&#169;</span>
        </h1>

        <div className={styles["nav-menu"]}>
          <Search />
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
