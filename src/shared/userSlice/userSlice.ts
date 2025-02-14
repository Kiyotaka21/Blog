import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authRepository } from "../../pages/Auth/api/authRepository";
import { AxiosError } from "axios";
import { userRepository } from "../api/userRepository";

export interface Profile {
  id: number;
  email: string;
  name: string
}

export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
  profile?: Profile;
}

export const initialState: UserState = {
  jwt: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await authRepository.login({
        params,
      });
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const registration = createAsyncThunk(
  "user/register",
  async (params: { email: string; password: string; name: string }) => {
    try {
      const { data } = await authRepository.register({
        params,
      });
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (jwt) => {      
      const { data } = await userRepository.getUser({
        config: {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        },
      })
      return data
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
    clearRegisterError: (state) => {
      state.registerErrorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.jwt = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginErrorMessage = action.error.message;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.jwt = action.payload.token;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.registerErrorMessage = action.error.message;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    })
  },
});

export const userActions = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
