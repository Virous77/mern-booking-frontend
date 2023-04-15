import React from "react";
import styles from "./Hotel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../common/Button";
import { useGlobalContext } from "../../context/useGlobal";

type PriceProps = {
  show: string;
  setShow: React.Dispatch<React.SetStateAction<string>>;
};

const Price: React.FC<PriceProps> = ({ setShow, show }) => {
  const value = useGlobalContext();
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
            value={value?.price.minPrice || ""}
            onChange={(e) =>
              value?.setPrice({ ...value?.price, minPrice: e.target.value })
            }
          />
        </fieldset>

        <fieldset>
          <h1>Max Price</h1>
          <input
            type="number"
            value={value?.price.maxPrice || ""}
            onChange={(e) =>
              value?.setPrice({ ...value?.price, maxPrice: e.target.value })
            }
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
