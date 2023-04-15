import React from "react";
import img from "../../assets/city-one.jpeg";
import styles from "./Hotel.module.scss";

type HotelGalleryType = {
  images: string[] | undefined;
};

const HotelGallery: React.FC<HotelGalleryType> = ({ images }) => {
  const style = [
    "left-top",
    "",
    "right-top",
    "left-bottom",
    "",
    "right-bottom",
  ];

  return (
    <div className={styles["gallery-main"]}>
      {[...Array(6).fill(1)].map((image, i) => (
        <div className={styles["gallery-wrap"]} key={i}>
          <img
            src={image.length > 10 ? image : img}
            alt="Hotel-gallery"
            className={styles[`${style[i]}`]}
          />
        </div>
      ))}
    </div>
  );
};

export default HotelGallery;
