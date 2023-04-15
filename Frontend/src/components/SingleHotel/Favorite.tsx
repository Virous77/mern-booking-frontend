import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Favorite = () => {
  const app = false;

  return (
    <div>
      {app ? (
        <MdFavorite
          color={`var(--main-font-color)`}
          size={21}
          cursor="pointer"
        />
      ) : (
        <MdFavoriteBorder
          color={`var(--main-font-color)`}
          size={21}
          cursor="pointer"
        />
      )}
    </div>
  );
};

export default Favorite;
