import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { animeRepository } from "../../pages/MainPage/api/animeRepository";
import { RootState } from "../../app/store/store";

export interface AnimeItem {
  id: number;
  title: string;
  episodes: number;
  rating: number;
  image: string;
  status: string;
  description: string;
  isFavorite: boolean;
}

export interface AnimeState {
  items: AnimeItem[];
  isLoading: boolean;
  error: string | null;
  search: string;
}

const loadFavorites = (): number[] => {
  const favorites = localStorage.getItem("favoriteAnime");
  return favorites ? JSON.parse(favorites) : [];
};

const initialState: AnimeState = {
  items: [],
  isLoading: false,
  error: null,
  search: "",
};

const favoriteId = loadFavorites();

export const getAllAnime = createAsyncThunk<AnimeItem[] | void>(
  "anime/fetchAnime",
  async () => {
    try {
      const { data } = await animeRepository.getAnime();
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const animeSlice = createSlice({
  name: "anime",
  initialState: {
    ...initialState,
    items: initialState.items.map((item) => ({
      ...item,
      isFavorite: favoriteId.includes(item.id),
    })),
  },
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    toggleFavorites(state, action: PayloadAction<number>) {
      const animeItem = state.items.find((i) => i.id === action.payload);
      if (animeItem) {
        animeItem.isFavorite = !animeItem.isFavorite;
      }
      const favorites = loadFavorites();
      if (animeItem?.isFavorite) {
        favorites.push(animeItem.id);
      } else {
        const index = favorites.indexOf(Number(animeItem?.id));
        if (index > -1) {
          favorites.splice(index, 1);
        }
      }
      localStorage.setItem("favoriteAnime", JSON.stringify(favorites));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      const itemToUpdate = state.items.find((i) => i.id === idToRemove);
      if (itemToUpdate) {
        itemToUpdate.isFavorite = false;
      }
      const favorites = loadFavorites();
      const index = favorites.indexOf(idToRemove);
      if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem("favoriteAnime", JSON.stringify(favorites));
      }
    },
    removeAll: (state) => {
      state.items.forEach((i) => {
        i.isFavorite = false;
        localStorage.removeItem("favoriteAnime");
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAnime.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) {
        return;
      }
      state.items = action.payload.map(i => ({
        ...i,
        isFavorite: favoriteId.includes(i.id)
      }))
    });
    builder.addCase(getAllAnime.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
  },
});

export const getFavoriteAnime = () => {
  return (state: RootState) => {
    return state.anime.items.filter((i) => i.isFavorite);
  };
};

export const animeActions = animeSlice.actions;
export const animeSliceReducer = animeSlice.reducer;
