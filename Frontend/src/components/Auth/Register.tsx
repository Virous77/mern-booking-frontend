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
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formDate, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    error: "",
  });
  const { email, password, username, name } = formDate;
  const { handleUserData } = useAuthContext() as stateType & methodType;
  const navigate = useNavigate();

  const body = {
    endPoints: "/auth/register",
    userData: { email, password, username, name },
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
    if (!email || !password || !name || !username) {
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
        <h1>Sign Up</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <label>Email</label>
            <input
              type="text"
              value={formDate.name}
              name="name"
              onChange={handleInputChange}
            />
            <p>{formDate.name.trim() === "" ? formDate.error : ""}</p>
          </fieldset>

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
            <label>Username</label>
            <input
              type="text"
              value={formDate.username}
              name="username"
              onChange={handleInputChange}
            />
            <p>{formDate.username.trim() === "" ? formDate.error : ""}</p>
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
            Already have an account? <Link to="/login">Sign In</Link>{" "}
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

export default Register;
