import { useEffect, useState } from "react";
import { Anime } from "./types";
import { animeRepository } from "./animeRepository";

export const useFetchAnime = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAnimes = async () => {
    setIsLoading(true);
    try {
      const res = await animeRepository.getAnime();
      setAnime(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAnimes();
  }, []);
  return { anime, isLoading };
};
