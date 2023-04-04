import React from "react";
import { useGlobalContext } from "../../context/useGlobal";

const Hotel = () => {
  const value = useGlobalContext();
  console.log(value?.queryData);
  return <div>Hotel</div>;
};

export default Hotel;
