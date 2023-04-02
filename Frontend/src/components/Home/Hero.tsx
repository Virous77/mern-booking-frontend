import React, { useState } from "react";
import { homeHeroImage } from "../../utils/Data";
import styles from "./Home.module.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  const [active, setActive] = useState<number>(0);

  const handleSlider = (value: string) => {
    if (value === "left")
      return setActive((prev) => {
        const newCount = prev === 0 ? homeHeroImage.length - 1 : prev - 1;
        return newCount;
      });

    if (value === "right")
      return setActive((prev) => {
        const newCount = prev === homeHeroImage.length - 1 ? 0 : prev + 1;
        return newCount;
      });
  };

  return (
    <main className={styles["hero-main"]}>
      {homeHeroImage.map((property, idx) => (
        <div key={property.id}>
          {active === idx && (
            <div className={styles["hero-wrap"]}>
              <img src={property.link} alt={property.name} />
              <div className={styles["hero-sub"]}>
                <h1>{property.name}</h1>
              </div>

              <div className={styles["hero-buttons"]}>
                <BsArrowLeftCircleFill
                  onClick={() => handleSlider("left")}
                  size={30}
                  color={"var(--main-font-color)"}
                  cursor="pointer"
                />
                <BsArrowRightCircleFill
                  onClick={() => handleSlider("right")}
                  size={30}
                  color={"var(--main-font-color)"}
                  cursor="pointer"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Hero;
