import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import { MdLocationPin } from "react-icons/md";
import { HotelType } from "../../types/type";
import { RiShareFill } from "react-icons/ri";
import Share from "./Share";
import Favorite from "./Favorite";
import { Modal } from "../../Modal/Modal";
import { AiFillStar } from "react-icons/ai";

type HeadType = {
  data: HotelType | undefined;
};

const Head: React.FC<HeadType> = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles["head-main"]}>
        <div className={styles["head-left"]}>
          <h1>{data?.name}</h1>
          <p>
            <MdLocationPin /> {data?.address}
            <b>
              {data && data?.rating > 0 ? data?.rating : "New"}
              {data && data.rating > 0 && <AiFillStar />}
            </b>
          </p>
          <span>
            {data?.distance}M from the downtown of {data?.city} city.
          </span>
        </div>
        <div className={styles["head-right"]}>
          <RiShareFill
            onClick={() => setShow(true)}
            color={`var(--main-font-color)`}
            size={21}
            cursor="pointer"
          />
          <Favorite />
        </div>
      </div>

      {show && (
        <Modal
          isOpen="isOpen"
          onClose={() => setShow(false)}
          style={styles["modal"]}
        >
          <Share close={() => setShow(false)} />
        </Modal>
      )}
    </>
  );
};

export default Head;
