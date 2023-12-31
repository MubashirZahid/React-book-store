import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../utils/userSlice";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const [userData, setUserData] = useState([]);
  const onSubmit = (data) => {
    //reqres registered sample user
    const loginPayload = {
      email: data.email,
      password: data.password,
    };

    axiosInstance
      .post("auth/api/logIn", loginPayload)
      .then((response) => {
        // get token from response
        console.log(response);
        console.log(loginPayload);
        setUserData(response.data.data);
        const token = response.data.data.token;

        // set JWT token to local storage
        localStorage.setItem("token", token);

        // Dispatch the loginUser action with the user data.
        dispatch(
          loginUser({
            email: data.email,
            password: data.password /* other user data */,
          })
        );

        // Redirect the user to the home page
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(
      loginUser({
        email: userData.email,
        password: userData.password /* other user data */,
      })
    );
  }, [userData]);

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div>
          <h3>Email</h3>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Enter email"
                {...field}
                style={styles.input}
              />
            )}
          />
        </div>
        <div>
          <h3>Password</h3>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                type="password"
                placeholder="Password"
                {...field}
                style={styles.input}
              />
            )}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
