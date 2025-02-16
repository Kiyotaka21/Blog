import { Headling } from "../../shared/ui/Headling/Headling";
import styles from "./MainPage.module.css";
import { AnimeList } from "./components/AnimeList/AnimeList";
import { useFetchAnime } from "./api/useFetchAnime";
import { TextField } from "@mui/material";

export const MainPage = () => {
  const { filteredAnime, isLoading, updateFilter } = useFetchAnime();

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
