import React from "react";
import styles from "./Home.module.scss";
import { useQuery } from "react-query";
import { getPropertyByType } from "../../api/api.js";

type Property = {
  _id: string;
  name: string;
  count: number;
  image: string;
};

const PropertyType = () => {
  const { data } = useQuery(
    ["byType"],
    (): Promise<Property[]> => getPropertyByType()
  );

  return (
    <main className={styles["type-main"]}>
      <h2>Browse by Property types</h2>

      <div className={styles["type-wrap"]}>
        {data?.map((type, i) => (
          <div className={styles["type-sub"]} key={type._id}>
            <img src={type.image} alt="" />
            <h3>{type.name}</h3>
            <p>
              {type.count} {type.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PropertyType;
