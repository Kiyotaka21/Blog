import { ChangeEvent, useEffect, useState } from "react";
import { Anime } from "./types";
import { animeRepository } from "./animeRepository";
import { AxiosError } from "axios";

export const useFetchAnime = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const getAnimes = async () => {
    setIsLoading(true);
    try {
      const res = await animeRepository.getAnime();
      setAnime(res.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAnimes();
  }, []);

  const filteredAnime = anime.filter((animeItem) =>
    animeItem.title.toLowerCase().includes(filter.toLowerCase())
  );
  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return { isLoading, filteredAnime, updateFilter };
};
