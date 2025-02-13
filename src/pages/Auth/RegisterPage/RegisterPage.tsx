import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { TextField } from "@mui/material";
import { RegisterPayload } from "../api/types";
import { ROUTER_PATH } from "../../../shared/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store/store";
import { useEffect } from "react";
import { registration, userActions } from "../../../shared/userSlice/userSlice";

export const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);
  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const { handleSubmit, register } = useForm<RegisterPayload>();
  const onSubmit: SubmitHandler<RegisterPayload> = async (data) => {
    dispatch(userActions.clearRegisterError());
    const params = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    dispatch(registration(params))
  };
  return (
    <div className={styles["login"]}>
      <h2 className={styles["header"]}>Registration</h2>
      {registerErrorMessage && (
        <div className={styles["error"]}>{registerErrorMessage}</div>
      )}
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
