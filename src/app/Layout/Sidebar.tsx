import { Button } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import styles from "./Layout.module.css";
import cn from "classnames";
import { ROUTER_PATH } from "../../shared/routes";

export const SideBar = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('jwt');
    navigate(ROUTER_PATH.LOGIN)
  }

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
            to={ROUTER_PATH.FAVORITES}
          >
            Favorites
          </NavLink>
        </div>
        <div className={styles["exit"]}>
          <Button onClick={logout} variant="outlined">Exit</Button>
        </div>
      </div>
    )
}