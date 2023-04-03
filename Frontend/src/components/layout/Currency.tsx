import React, { useState } from "react";
import styles from "./Layout.module.scss";

const Rupee = () => {
  const localCurrency = localStorage.getItem("currency");
  const currency: string = localCurrency ? JSON.parse(localCurrency) : "";

  const handleCurrency = (value?: string) => {
    if (value === "usd") {
      localStorage.setItem("currency", JSON.stringify("usd"));
    } else {
      localStorage.removeItem("currency");
    }
  };

  return (
    <>
      <p
        onClick={() => {
          handleCurrency(currency === "usd" ? "" : "usd");
          window.location.reload();
        }}
        className={styles.currency}
      >
        {currency === "usd" ? `$ USD` : `₹ Inr`}
      </p>
    </>
  );
};

export default Rupee;
