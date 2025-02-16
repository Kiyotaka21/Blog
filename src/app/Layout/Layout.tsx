import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { SideBar } from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Layout = () => {
  const jwt = useSelector((s: RootState) => s.user.jwt);
  return (
    <div className={styles["layout"]}>
      {jwt ? (
        <SideBar />
      ) : (
        <img className={styles["img"]} src="/sasuke.webp" alt="sasuke" />
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
