import styles from "./AnimeList.module.css";
import { Anime } from "../../api/types";
import { MediaCard } from "../Card/MediaCard";

export interface AnimeListProps {
  anime: Anime[];
}

export function AnimeList({ anime }: AnimeListProps) {
  return (
    <div className={styles["list"]}>
      {anime.map((anime) => (
        <MediaCard
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
