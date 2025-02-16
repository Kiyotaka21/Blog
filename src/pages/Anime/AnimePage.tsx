import styles from "./AnimePage.module.css";
import { useGetAnime } from "./api/useGetAnime";

export function AnimePage() {
  const { item } = useGetAnime();
  return (
    <>
      <div className={styles["top"]}>
        <img src={item?.image} alt="иконка" />
        <div className={styles["right"]}>
          <h2>Title: {item?.title}</h2>
          <p>Rating: {item?.rating}</p>
          <p>Status: {item?.status}</p> 
          <p>Episodes: {item?.episodes}</p>
        </div>
      </div>
      <div className={styles["footer"]}>
        <p>{item?.description}</p>
      </div>
    </>
  );
}
