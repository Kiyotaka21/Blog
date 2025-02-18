import { api } from "../../../shared/api/axiosInstance";
import { RequestAxiosConfig } from "../../../shared/api/types";
import { AnimeItem } from "../../../shared/animeSlice/animeSlice";

export class AnimeRepository {
  getAnime(requestCfg?: RequestAxiosConfig) {
    return api.get<AnimeItem[]>("/items", requestCfg?.config);
  };
}

export const animeRepository = new AnimeRepository();
