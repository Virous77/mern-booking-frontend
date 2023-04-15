import React, { useState } from "react";
import styles from "./Auth.module.scss";
import Button from "../common/Button";
import {
  useAuthContext,
  stateType,
  methodType,
} from "../../context/authContext";
import { useMutation } from "react-query";
import { postData } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formDate, setFormData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const { email, password } = formDate;
  const { handleUserData } = useAuthContext() as stateType & methodType;
  const navigate = useNavigate();

  const body = {
    endPoints: "/auth/login",
    userData: { email, password },
  };

  const { mutate, isLoading } = useMutation(() => postData({ ...body }), {
    onError: (error: any) => {
      setFormData((prevState) => ({
        ...prevState,
        error: error.response.data.message,
      }));
    },
    onSuccess: (data) => {
      handleUserData(data.data);
      navigate("/");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      error: prevState.error,
    }));
  };

  const handleSubmit = () => {
    if (!email || !password) {
      return setFormData((prevState) => ({
        ...prevState,
        error: "Fields cant be empty!",
      }));
    }
    mutate();
  };

  return (
    <main className={styles["auth-main"]}>
      <div className={styles["auth-login"]}>
        <h1>Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <label>Email</label>
            <input
              type="text"
              value={formDate.email}
              name="email"
              onChange={handleInputChange}
            />
            <p>{formDate.email.trim() === "" ? formDate.error : ""}</p>
          </fieldset>

          <fieldset>
            <label>Password</label>
            <input
              type="text"
              value={formDate.password}
              name="password"
              onChange={handleInputChange}
            />
            <p>{formDate.password.trim() === "" ? formDate.error : ""}</p>
          </fieldset>

          <b>
            Don't have an account? <Link to="/register">Sign Up</Link>{" "}
          </b>

          <span>
            {formDate.error === "Fields cant be empty!" ? "" : formDate.error}
          </span>

          <Button
            onClick={handleSubmit}
            buttonName={isLoading ? "Processing" : "Submit"}
            className={styles["auth-button"]}
          />
        </form>
      </div>
    </main>
  );
};

export default Login;
