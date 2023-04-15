import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { HotelType } from "../../types/type";
import Head from "./Head";
import styles from "./Hotel.module.scss";
import HotelGallery from "./HotelGallery";
import HotelDetails from "./HotelDetails";
import { getLocalData } from "../../utils/Data";

const Hotel = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ["sHotel"],
    (): Promise<HotelType> | undefined => {
      if (id) {
        return fetchData(`/hotel/get/${id}`);
      }
    }
  );

  return (
    <main className={styles["hotel-main"]}>
      <section>
        <Head data={data} />
        <HotelGallery images={data?.photos} />
        <HotelDetails data={data} />
      </section>
    </main>
  );
};

export default Hotel;
