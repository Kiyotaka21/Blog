import { useDispatch, useSelector } from "react-redux";
import { Headling } from "../../shared/ui/Headling/Headling";
import { AppDispatch } from "../../app/store/store";
import { FavoritesCard } from "./components/FavoritesCard/FavoritesCard";
import styles from "./FavoritesPage.module.css";
import { Button } from "@mui/material";
import {
  animeActions,
  getFavoriteAnime,
} from "../../shared/animeSlice/animeSlice";

export const FavoritesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const removeAllHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(animeActions.removeAll());
  };

  const favoriteItem = useSelector(getFavoriteAnime());

  return (
    <>
      <div className={styles["headling"]}>
        <Headling>Favorites</Headling>
        <Button onClick={removeAllHandler} variant="outlined">
          Clean all
        </Button>
      </div>
      <div className={styles["content"]}>
        {favoriteItem.map((i) => (
          <FavoritesCard {...i} />
        ))}
      </div>
    </>
  );
};
