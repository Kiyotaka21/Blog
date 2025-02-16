import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import cn from "classnames";
import { ROUTER_PATH } from "../../shared/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getProfile, userActions } from "../../shared/userSlice/userSlice";
import { useEffect } from "react";

export const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logout = () => {
    dispatch(userActions.logout());
    navigate(ROUTER_PATH.LOGIN);
  };

  const profile = useSelector((s: RootState) => s.user.profile);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["logo"]}>MAL</div>
      <div className={styles["name"]}>{profile?.name}</div>
      <div className={styles["email"]}>{profile?.email}</div>
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
        <Button onClick={logout} variant="outlined">
          Exit
        </Button>
      </div>
    </div>
  );
};
