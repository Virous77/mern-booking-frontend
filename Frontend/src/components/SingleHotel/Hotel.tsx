import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { HotelType } from "../../types/type";
import Head from "./Head";
import styles from "./Hotel.module.scss";
import HotelGallery from "./HotelGallery";
import HotelDetails from "./HotelDetails";
import { useGlobalContext } from "../../context/useGlobal";
import { Modal } from "../../Modal/Modal";
import BookingModal from "../Booking/BookingModal";

const Hotel = () => {
  const { id } = useParams();
  const value = useGlobalContext();

  const { data } = useQuery(["sHotel"], (): Promise<HotelType> | undefined => {
    if (id) {
      return fetchData(`/hotel/get/${id}`);
    }
  });

  return (
    <main className={styles["hotel-main"]}>
      <section>
        <Head data={data} />
        <HotelGallery images={data?.photos} />
        <HotelDetails data={data} />
      </section>

      {value?.booking && (
        <Modal
          isOpen="isOpen"
          onClose={() => value.setBooking(false)}
          style={styles["modal"]}
        >
          <BookingModal close={() => value.setBooking(false)} />
        </Modal>
      )}
    </main>
  );
};

export default Hotel;
