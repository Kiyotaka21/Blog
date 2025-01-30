import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import styles from "./Layout.module.css";
import cn from "classnames";

export const SideBar = () => {
    return (
        <div className={styles["sidebar"]}>
        <div className={styles["logo"]}>MAL</div>
        <div className={styles["name"]}>Dmitrii Gromov</div>
        <div className={styles["email"]}>mugiwara52@mail.ru</div>
        <div className={styles["menu"]}>
          <NavLink
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
            to="/"
          >
            Anime
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
            to="/favorites"
          >
            Favorites
          </NavLink>
        </div>
        <div className={styles["exit"]}>
          <Button variant="outlined">Exit</Button>
        </div>
      </div>
    )
}