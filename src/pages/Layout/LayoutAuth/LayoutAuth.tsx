import { Outlet } from "react-router-dom";
import styles from './LayoutAuth.module.css'

export const LayoutAuth = () => {
    return (
      <div className={styles["layout"]}>
        <div className={styles['logo']}>
            <img src="/sasuke.webp" alt="sasuke" />
        </div>
        <div className={styles['content']}>
          <Outlet />
        </div>
      </div>
    );
  };
  