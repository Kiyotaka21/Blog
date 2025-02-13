import { api } from "../../../shared/api/axiosInstance";
import { RequestAxiosConfig } from "../../../shared/api/types";
import { RegisterPayload, LoginPayload } from "./types";

export class AuthRepository {
  login({ params, config }: RequestAxiosConfig<LoginPayload>) {
    return api.post<{ token: string }>("/auth", params, config);
  }
  register({ params, config }: RequestAxiosConfig<RegisterPayload>) {
    return api.post<{ token: string }>("/register", params, config);
  }
}

export const authRepository = new AuthRepository();
