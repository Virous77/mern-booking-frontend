import React from "react";
import { FaRegUser } from "react-icons/fa";
import styles from "./Layout.module.scss";

const AuthLogo = () => {
  return (
    <button className={styles.button}>
      <FaRegUser />
    </button>
  );
};

export default AuthLogo;
