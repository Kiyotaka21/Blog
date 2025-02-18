import { Link } from "react-router-dom";
import styles from "./FavoritesCard.module.css";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store/store";
import { animeActions } from "../../../../shared/animeSlice/animeSlice";

export interface FavoritesCardProps {
  id: number;
  title: string;
  episodes: number;
  image: string;
  status: string;
  rating: number;
}

export function FavoritesCard({
  id,
  title,
  episodes,
  image,
  status,
  rating,
}: FavoritesCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const remove = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(animeActions.removeFavorite(id));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`anime/${id}`} className={styles["link"]}>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
        title="anime"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
           {title}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Episodes: {episodes}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Rating: {rating}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Status: {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={remove} size="small">Remove from favorites</Button>
      </CardActions>
    </Card>
  );
}
