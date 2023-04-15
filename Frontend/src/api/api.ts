import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const getCountByCityHotel = async () => {
  try {
    const { data } = await axios.get(
      `${url}/hotel/countByCity?cities=Mumbai,Delhi,Kolkata`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getPropertyByType = async () => {
  try {
    const { data } = await axios.get(`${url}/hotel/countByType`);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchData = async (endPoints: string) => {
  try {
    const { data } = await axios.get(`${url}${endPoints}`);
    return data;
  } catch (error) {
    throw error;
  }
};

type propsType = {
  endPoints: string;
  userData: any;
};

export const postData = async ({ endPoints, userData }: propsType) => {
  return axios.post(`${url}${endPoints}`, userData);
};

export const getStatus = async ({ endPoints, userData }: propsType) => {
  return axios.post(`${url}${endPoints}`, { token: userData });
};
