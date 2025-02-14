import { useEffect, useState } from "react";
import { Anime } from "../../MainPage/api/types";
import { useParams } from "react-router-dom";
import { getAnimeRepository } from "../../../shared/api/getAnimeRepository";

export const useGetAnime = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Anime>();
  const getItem = async (id: number) => {
    const { data } = await getAnimeRepository.getAnimeItem({
        params: {
          id
        }
      });
      return data;
  };
  useEffect(() => {
    const fetchItem = async () => {
      const data = await getItem(Number(id));
      setItem(data);
    };
    fetchItem();
  }, [id]);

  return { item };
};
