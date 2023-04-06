import React from "react";
import styles from "./Hotel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../common/Button";
import { BookingUserDataProps } from "./BookingUserData";

type PriceProps = {
  show: string;
  setShow: React.Dispatch<React.SetStateAction<string>>;
};

const Price: React.FC<PriceProps & BookingUserDataProps> = ({
  setShow,
  price,
  setPrice,
}) => {
  return (
    <div className={styles["price-main"]}>
      <div className={styles["price-head"]}>
        <h4>Price</h4>
        <AiOutlineClose
          size={18}
          color={"var(--main-font-color)"}
          cursor="pointer"
          onClick={() => setShow("")}
        />
      </div>

      <div>
        <fieldset>
          <h1>Min Price</h1>
          <input
            type="number"
            value={price.minPrice || ""}
            onChange={(e) => setPrice({ ...price, minPrice: e.target.value })}
          />
        </fieldset>

        <fieldset>
          <h1>Max Price</h1>
          <input
            type="number"
            value={price.maxPrice || ""}
            onChange={(e) => setPrice({ ...price, maxPrice: e.target.value })}
          />
        </fieldset>

        <Button
          buttonName="Submit"
          onClick={() => setShow("")}
          className={styles["price-button"]}
        />
      </div>
    </div>
  );
};

export default Price;
