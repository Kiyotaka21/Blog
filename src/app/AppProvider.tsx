import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { getAllAnime } from "../shared/animeSlice/animeSlice";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (jwt) {
        dispatch(getAllAnime())
    }
  }, [jwt, dispatch])

  return children
};
