import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import axios, { AxiosError } from "axios";

interface IForm {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<IForm>();
  const submit: SubmitHandler<IForm> = async (data) => {
    await sendLogin(data.email, data.password);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        `https://a866a7699c4b2576.mokky.dev/auth`,
        {
          email,
          password,
        }
      );
      localStorage.setItem('jwt', data.token)
      navigate('/')
    } catch(e) {
      if (e instanceof AxiosError) {
        console.error(e.message)
      }
    }
    
  };
  return (
    <div className={styles["login"]}>
      <h2 className={styles["header"]}>Login</h2>
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
        <button className={styles["button"]}>Log in</button>
      </form>
      <div>
        <p className={styles["text"]}>Don't have an account?</p>
        <Link className={styles["link"]} to="auth/register">
          Registration
        </Link>
      </div>
    </div>
  );
};
