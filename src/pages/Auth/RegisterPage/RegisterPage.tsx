import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { TextField } from "@mui/material";
import { authRepository } from "../api/authRepository";
import { AxiosError } from "axios";
import { RegisterPayload } from "../api/types";
import { ROUTER_PATH } from "../../../shared/routes";

export const RegisterPage = () => {
  const { handleSubmit, register } = useForm<RegisterPayload>();
  const onSubmit: SubmitHandler<RegisterPayload> = async (data) => {
    const params = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    try {
      const { data } = await authRepository.register({
        params,
      });
      localStorage.setItem("jwt", data.token);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.message);
      }
    }
  };
  return (
    <div className={styles["login"]}>
      <h2 className={styles["header"]}>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        <TextField
          label="Email"
          variant="outlined"
          {...register("email", { required: true })}
        />
        <TextField
          label="Password"
          variant="outlined"
          {...register("password", { required: true })}
        />
        <TextField
          label="Name"
          variant="outlined"
          {...register("name", { required: true })}
        />
        <button className={styles["button"]}>Create acc</button>
      </form>
      <div>
        <p className={styles["text"]}>Have an account?</p>
        <Link className={styles["link"]} to={ROUTER_PATH.LOGIN}>
          Log in
        </Link>
      </div>
    </div>
  );
};
