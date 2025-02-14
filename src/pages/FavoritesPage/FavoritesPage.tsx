import { useDispatch, useSelector } from "react-redux";
import { Headling } from "../../shared/ui/Headling/Headling";
import { AppDispatch, RootState } from "../../app/store/store";
import { useEffect, useState } from "react";
import { Anime } from "../MainPage/api/types";
import { api } from "../../shared/api/axiosInstance";
import { FavoritesCard } from "./components/FavoritesCard/FavoritesCard";
import styles from './FavoritesPage.module.css'
import { Button } from "@mui/material";
import { favoritesActions } from "./favoritesSlice/favoritesSlice";

export const FavoritesPage = () => {
  const items = useSelector((s: RootState) => s.favorites.items);
  const [favorites, setfavorites] = useState<Anime[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const getItem = async (id: number) => {
    const { data } = await api.get<Anime>(`/items/${id}`);
    return data;
  };
  const loadAllItems = async () => {
    const res = await Promise.all(items.map(i => getItem(i.id)));
    setfavorites(res)
  }

  useEffect(() => {
    loadAllItems()
  }, [items])

  const removeAllHandler = () => {
    dispatch(favoritesActions.removeAll())
  }

  return (
    <>
    <div className={styles["headling"]}>
      <Headling>Favorites</Headling>
      <Button onClick={removeAllHandler} variant="outlined"> Clean all</Button>
      </div>
      <div className={styles['content']}>
      {items.map(i => {
        const favoriteItem = favorites.find(f => f.id === i.id)
        if (!favoriteItem) {
            return
        }
        return <FavoritesCard {...favoriteItem}/>
      })}
      </div>      
    </>
  );
};
