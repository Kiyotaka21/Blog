import { Link } from "react-router-dom";
import styles from "./FavoritesCard.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store/store";
import { favoritesActions } from "../../favoritesSlice/favoritesSlice";

export interface FavoritesCardProps {
  id: number;
  title: string;
  episodes: number;
  image: string;
  status: string;
  rating: number;
}

export function FavoritesCard({
  id,
  title,
  episodes,
  image,
  status,
  rating,
}: FavoritesCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const remove = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(favoritesActions.remove(id));
  };
  return (
    <div className={styles["main"]}>
      <Link to={`anime/${id}`} className={styles["link"]}>
        <div className={styles["card"]}>
          <img className={styles["head"]} src={image} alt="картинка" />
          <div className={styles["bottom"]}>
            <div className={styles["name"]}>{title}</div>
            <div className={styles["episodes"]}>Episodes: {episodes}</div>
            <div className={styles["rating"]}>Rating: {rating}</div>
            <div className={styles["status"]}>Status: {status}</div>
            <Button onClick={remove} variant="outlined">Remove from favorites</Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
