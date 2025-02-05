import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import axios from "axios";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const { handleSubmit, register } = useForm<RegisterForm>();
  const submit: SubmitHandler<RegisterForm> = async (data) => {
    await sendLogin(data.email, data.password);
  };

  const sendLogin = async (email: string, password: string) => {
    const { data } = await axios.post(
      `https://a866a7699c4b2576.mokky.dev/register`,
      {
        email,
        password,
        name,
      }
    );
    localStorage.setItem('jwt', data.token);
  };
  return (
    <div className={styles["login"]}>
      <h2 className={styles["header"]}>Registration</h2>
      <form onSubmit={handleSubmit(submit)} className={styles["form"]}>
        <div className={styles["input"]}>
          <label htmlFor="email">Email</label>
          <input
            className={styles["field"]}
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="password">Password</label>
          <input
            className={styles["field"]}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="password">Name</label>
          <input
            className={styles["field"]}
            type="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        <button className={styles["button"]}>Create acc</button>
      </form>
      <div>
        <p className={styles["text"]}>Have an account?</p>
        <Link className={styles["link"]} to="auth/login">
          Log in
        </Link>
      </div>
    </div>
  );
};
