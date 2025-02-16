import { Profile } from "../userSlice/userSlice";
import { api } from "./axiosInstance";
import { RequestAxiosConfig } from "./types";

export class UserRepository {
  getUser(requestCfg?: RequestAxiosConfig) {
    return api.get<Profile>("/users", requestCfg?.config);
  }
}

export const userRepository = new UserRepository();