import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { TextField } from "@mui/material";
import { authRepository } from "../api/authRepository";
import { AxiosError } from "axios";
import { LoginPayload } from "../api/types";
import { ROUTER_PATH } from "../../../shared/routes";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginPayload>();
  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    const params = { email: data.email, password: data.password };
    try {
      const { data } = await authRepository.login({
        params,
      });
      localStorage.setItem("jwt", data.token);
      navigate("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.message);
      }
    }
  };
  return (
    <div className={styles["login"]}>
      <h2 className={styles["header"]}>Login</h2>
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
        <button className={styles["button"]}>Create acc</button>
      </form>
      <div>
        <p className={styles["text"]}>Don't have an account?</p>
        <Link className={styles["link"]} to={ROUTER_PATH.REGISTER}>
          Registration
        </Link>
      </div>
    </div>
  );
};
