import axios from "axios";

const url = import.meta.env.BACKEND_URL;

export const getCountByCityHotel = async () => {
  try {
    const { data } = axios.get(
      `${url}/hotel/countByCity?cities=Saran,Patna,Gaya`
    );
    return data;
  } catch (error) {
    return error;
  }
};
