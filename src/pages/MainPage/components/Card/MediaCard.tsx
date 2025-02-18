import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from './Card.module.css'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store/store";
import { animeActions } from "../../../../shared/animeSlice/animeSlice";

export interface CardProps {
  id: number;
  title: string;
  episodes: number;
  image: string;
  status: string;
  rating: number;
}

export function MediaCard({
  id,
  title,
  episodes,
  image,
  status,
  rating,
}: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const toggleFavorites= () => dispatch(animeActions.toggleFavorites(id))

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
        <Button onClick={toggleFavorites} size="small">Add to favorites</Button>
      </CardActions>
    </Card>
  );
}
