import styles from "./AnimeList.module.css";
import { Anime } from "../../api/types";
import { Card } from "../Card/Card";

export interface AnimeListProps {
  anime: Anime[];
}

export function AnimeList({ anime }: AnimeListProps) {
  return (
    <div className={styles["list"]}>
      {anime.map((anime) => (
        <Card
          key={anime.id}
          id={anime.id}
          image={anime.image}
          title={anime.title}
          episodes={anime.episodes}
          status={anime.status}
          rating={anime.rating}
        />
      ))}
    </div>
  );
}
