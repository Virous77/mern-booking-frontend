import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { HotelType } from "../../types/type";
import styles from "./Home.module.scss";
import { AiFillStar } from "react-icons/ai";
import { getLocalData } from "../../utils/Data";

const Featured = () => {
  const { data } = useQuery(
    ["featured"],
    (): Promise<HotelType[]> => fetchData("/hotel?featured=true&limit=10")
  );

  return (
    <main className={styles["featured-main"]}>
      <h2>Loved Properties by our guest</h2>
      <section>
        <div className={styles["featured-wrap"]}>
          {data?.map((hotel) => (
            <div className={styles["featured-sub"]} key={hotel._id}>
              <img
                src={
                  hotel.photos[0] ||
                  "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
                alt={hotel.name}
              />
              <h3>{hotel.name}</h3>
              <p>{hotel.address}</p>
              <span>
                Starting from
                <p>
                  {getLocalData("currency") === "usd"
                    ? `$${(hotel.cheapestPrice / 85)?.toFixed(2)}`
                    : `₹${hotel.cheapestPrice}`}
                </p>
              </span>
              {hotel.rating && (
                <b>
                  {hotel.rating} <AiFillStar color="red" size={18} />
                </b>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Featured;
