import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { SideBar } from "./Sidebar";

export const Layout = () => {
  const isAuthorized = localStorage.getItem("jwt");
  return (
    <div className={styles["layout"]}>
      {isAuthorized ? (
        <SideBar />
      ) : (
        <img className={styles["logo"]} src="/sasuke.webp" alt="sasuke" />
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
