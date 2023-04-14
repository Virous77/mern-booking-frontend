import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import { MdLocationPin } from "react-icons/md";
import { HotelType } from "../../types/type";
import { RiShareFill } from "react-icons/ri";
import Share from "./Share";
import { Modal } from "../../Modal/Modal";

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
          </p>
          <span>{data?.distance}M from the downtown of city.</span>
        </div>
        <div className={styles["head-right"]}>
          <RiShareFill onClick={() => setShow(true)} />
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
