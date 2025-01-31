import { useParams } from "react-router-dom";

export function Anime() {
    const { id } = useParams();

    return <>Anime - {id}</>
}