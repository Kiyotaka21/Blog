import { api } from "../../../shared/api/axiosInstance";
import { Anime } from "./types";
import { RequestAxiosConfig } from "../../../shared/api/types";

export class AnimeRepository {
  getAnime(requestCfg?: RequestAxiosConfig) {
    return api.get<Anime[]>("/items", requestCfg?.config);
  };
}

export const animeRepository = new AnimeRepository();
