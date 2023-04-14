import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";

const Hotel = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["sHotel"], () => {
    if (id) {
      return fetchData(`/hotel/get/${id}`);
    }
  });

  console.log(data);
  return <div>Hotel</div>;
};

export default Hotel;
