import React from "react";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";

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
  const { handleSubmit, control } = useForm();

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
        const token = response.data.data.token;

        // set JWT token to local storage
        localStorage.setItem("token", token);

        // redirect user to home page
        // navigate("/");
      })
      .catch((err) => console.log(err));
  };

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
