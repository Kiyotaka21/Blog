import { Anime } from "../../pages/MainPage/api/types";
import { api } from "./axiosInstance";
import { RequestAxiosConfig } from "./types";

export class GetAnimeRepository {
  getAnimeItem(requestCfg?: RequestAxiosConfig<{id: number}>) {
    return api.get<Anime[]>(`/items`, requestCfg?.config);
  }
}

export const getAnimeRepository = new GetAnimeRepository();
