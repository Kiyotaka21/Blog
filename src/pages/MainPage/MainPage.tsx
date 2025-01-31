import { Select } from "./components/Select/Select";
import { Headling } from "./components/Headling/Headling";
import styles from "./MainPage.module.css";
import { AnimeList } from "./components/AnimeList/AnimeList";
import { useFetchAnime } from "./api/useFetchAnime";
import { TextField } from "@mui/material";

export const MainPage = () => {
  const { anime, isLoading } = useFetchAnime();

  if (isLoading) {
    return "Данные загружаются";
  }
  return (
    <div className={styles["main"]}>
      <div className={styles["headling"]}>
        <Headling>Anime</Headling>
        <TextField
          id="outlined-basic"
          label="Search anime"
          variant="outlined"
        />
        <Select />
      </div>
      <div className={styles["page"]}>
        <AnimeList anime={anime} />
      </div>
    </div>
  );
};
