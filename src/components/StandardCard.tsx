import useStore from "../store";
import BookmarkFull from "../assets/icon-bookmark-full.svg";
import BookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import styles from "./StandardCard.module.css";
import CategoryMovie from "../assets/icon-category-movie.svg";
import CategoryTvSeries from "../assets/icon-category-tv.svg";

function StandardCard({ imgSrc, title, isBookmarked, category, year }) {
  const { toggleBookmarked } = useStore();
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={imgSrc} alt={title} className={styles.cardImg} />
        <button
          onClick={() => toggleBookmarked(title)}
          className={styles.bookmarked}
        >
          <img
            src={isBookmarked ? BookmarkFull : BookmarkEmpty}
            alt=""
            className={styles.icon}
          />
        </button>
      </div>
      <div className={styles.textContent}>
        <span>{year}</span>
        <img
          src={category === "Movie" ? CategoryMovie : CategoryTvSeries}
          alt=""
          className={styles.categoryIcon}
        />
        <span>{category}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default StandardCard;
