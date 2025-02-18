import { Headling } from "../../shared/ui/Headling/Headling";
import styles from "./MainPage.module.css";
import { AnimeList } from "./components/AnimeList/AnimeList";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { ChangeEvent } from "react";
import { animeActions } from "../../shared/animeSlice/animeSlice";

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, isLoading, search} = useSelector((s: RootState) => s.anime);

  const filteredAnime = items.filter((animeItem) =>
    animeItem.title.toLowerCase().includes(search.toLowerCase())
  );

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(animeActions.setSearch(e.target.value));
  };

  if (isLoading) {
    return "Данные загружаются";
  }
  return (
    <div className={styles["main"]}>
      <div className={styles["headling"]}>
        <Headling>Anime</Headling>
        <TextField
          onChange={updateFilter}
          id="outlined-basic"
          label="Search anime"
          variant="outlined"
        />
      </div>
      <div className={styles["page"]}>
        <AnimeList anime={filteredAnime} />
      </div>
    </div>
  );
};
