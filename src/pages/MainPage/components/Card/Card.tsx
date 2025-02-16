import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Button } from "@mui/material";
import { AppDispatch } from "../../../../app/store/store";
import { favoritesActions } from "../../../FavoritesPage/favoritesSlice/favoritesSlice";
import { useDispatch } from "react-redux";

export interface CardProps {
  id: number;
  title: string;
  episodes: number;
  image: string;
  status: string;
  rating: number;
}

export function Card({
  id,
  title,
  episodes,
  image,
  status,
  rating,
}: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const add = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(favoritesActions.add(id));
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
            <Button onClick={add} variant="outlined">
              Add to favorites
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
