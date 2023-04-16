import React from "react";
import { FaRegUser } from "react-icons/fa";
import styles from "./Layout.module.scss";
import { getLocalData } from "../../utils/Data";
import { AiOutlineLogout } from "react-icons/ai";
import { fetchData } from "../../api/api";
import { useAuthContext } from "../../context/authContext";
import { useMutation } from "react-query";
import { stateType, methodType } from "../../context/authContext";

const AuthLogo = () => {
  const { handleUserData } = useAuthContext() as stateType & methodType;

  const { mutate } = useMutation(() => fetchData("/auth"), {
    onSuccess: () => {
      localStorage.removeItem("token");
      handleUserData(null);
    },
  });

  return (
    <>
      {!getLocalData("token") ? (
        <button className={styles.button}>
          <FaRegUser />
        </button>
      ) : (
        <button className={styles.button} onClick={() => mutate()}>
          <AiOutlineLogout />
        </button>
      )}
    </>
  );
};

export default AuthLogo;
