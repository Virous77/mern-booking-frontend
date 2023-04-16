import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Theme from "../Theme/Theme";
import AuthLogo from "./AuthLogo";
import { CgMenuRound } from "react-icons/cg";
import MainComponents from "../search/MainComponents";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useMutation } from "react-query";
import { getLocalData } from "../../utils/Data";
import { getStatus } from "../../api/api";
import { useAuthContext } from "../../context/authContext";
import { stateType, methodType } from "../../context/authContext";

const Navbar = React.memo(() => {
  const [show, setShow] = useState(false);
  const body = document.querySelector("body");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleUserData } = useAuthContext() as stateType & methodType;

  const { mutate } = useMutation(
    ["userIn"],
    (token) => getStatus({ endPoints: "/user", userData: token }),
    {
      onSuccess: (data) => {
        handleUserData(data.data);
      },
    }
  );

  body?.addEventListener("click", () => {
    setShow(false);
  });

  useEffect(() => {
    const token = getLocalData("token");
    if (token) {
      mutate(token);
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-wrap"]}>
        <h1 onClick={() => navigate("/")}>
          Roomsy <span>&#169;</span>
        </h1>

        <div className={styles["nav-menu"]}>
          {pathname === "/" && (
            <>
              {!show && (
                <HiOutlineSearchCircle
                  onClick={(e) => {
                    setShow(true), e.stopPropagation();
                  }}
                  size={22}
                  cursor="pointer"
                  color={"var(--main-font-color)"}
                  className={styles["hide-it"]}
                />
              )}
              {show && <MainComponents />}

              <HiOutlineSearchCircle
                onClick={() => {
                  navigate("/hotel");
                }}
                size={22}
                cursor="pointer"
                color={"var(--main-font-color)"}
                className={styles["show-it"]}
              />
            </>
          )}

          <Theme />
          {!getLocalData("token") ? (
            <Link to="/login">
              <AuthLogo />
            </Link>
          ) : (
            <AuthLogo />
          )}
        </div>

        <div className={styles["nav-mobile-menu"]}>
          <HiOutlineSearchCircle
            onClick={(e) => {
              navigate("/hotel");
            }}
            size={22}
            cursor="pointer"
            color={"var(--main-font-color)"}
          />

          <Theme />
          <CgMenuRound
            size={30}
            cursor="pointer"
            color={"var(--main-font-color)"}
          />
        </div>
      </div>
    </nav>
  );
});

export default Navbar;

// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const currentScrollPosition = window.pageYOffset;
//     if (currentScrollPosition > window.innerHeight * 0.1) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// console.log(isScrolled);
