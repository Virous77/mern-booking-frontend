import React from "react";
import sv from "../../assets/city-two.jpeg";
import styles from "./Hotel.module.scss";
import { HotelType } from "../../types/type";
import Button from "../common/Button";
import { AiFillStar } from "react-icons/ai";
import { getLocalData } from "../../utils/Data";
import { Link } from "react-router-dom";

type HotelListProps = {
  hotels: HotelType[] | undefined;
};

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  return (
    <div className={styles["list-main"]}>
      <div className={styles["list-warp"]}>
        {hotels?.map((hotel) => (
          <div className={styles["list-list"]} key={hotel._id}>
            <img src={hotel.photos[0] || sv} alt={hotel.name} />

            <div className={styles["list-details"]}>
              <div className={styles["details-head"]}>
                <h1>{hotel.name}</h1>
                <p>
                  {hotel.rating > 0 ? hotel.rating : "New"}
                  {hotel.rating > 0 && <AiFillStar color="red" size={16} />}
                </p>
              </div>

              <div className={styles["sub-details"]}>
                <span>{hotel.distance}m from center</span>
                <p>{hotel.desc}</p>
              </div>

              <div className={styles["list-foot"]}>
                <div>
                  <p>Free taxi available</p>
                  <b>Free Cancellation</b>
                </div>

                <div className={styles["list-price"]}>
                  <h2>
                    {" "}
                    {getLocalData("currency") === "usd"
                      ? `$${(hotel.cheapestPrice / 85).toFixed(2)}`
                      : `₹${hotel.cheapestPrice}`}
                  </h2>
                  <p>includes taxes and fees</p>

                  <Link to={`/hotel/${hotel._id}`}>
                    <Button
                      buttonName="See availability"
                      className={styles["avail"]}
                      onClick={() => {}}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
