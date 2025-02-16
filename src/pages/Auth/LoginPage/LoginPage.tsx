import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { TextField } from "@mui/material";
import { LoginPayload } from "../api/types";
import { ROUTER_PATH } from "../../../shared/routes";
import { useDispatch, useSelector } from "react-redux";
import { login, userActions } from "../../../shared/userSlice/userSlice";
import { AppDispatch, RootState } from "../../../app/store/store";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {jwt, loginErrorMessage} = useSelector((s: RootState) => s.user);
  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate])
  

  const { handleSubmit, register } = useForm<LoginPayload>();
  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    dispatch(userActions.clearLoginError())
    const params = { email: data.email, password: data.password };
    dispatch(login(params));
  };
  return (
    <div className={styles["login"]}>
      <h2 className={styles["header"]}>Login</h2>
      {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
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
        <button className={styles["button"]}>Log in</button>
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
