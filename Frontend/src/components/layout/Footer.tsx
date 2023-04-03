import React from "react";
import styles from "./Layout.module.scss";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Rupee from "./Currency";

const Footer = () => {
  return (
    <footer className={styles["footer-main"]}>
      <p>&copy; {new Date().getFullYear()} Roomsy </p>

      <div className={styles.socials}>
        <Rupee />
        <a href={`https://github.com/Virous77`} target="blank">
          <BsGithub color={`var(--body-color)`} size={20} />
        </a>

        <a href={`https://twitter.com/imbitcoinb`} target="blank">
          <BsTwitter color={`var(--body-color)`} size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
