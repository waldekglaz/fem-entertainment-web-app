import React from "react";
import styles from "./TrendingCard.module.css";
import BookmarkFull from "../assets/icon-bookmark-full.svg";
import BookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import CategoryMovie from "../assets/icon-category-movie.svg";
import CategoryTvSeries from "../assets/icon-category-tv.svg";
import useStore from "../store";

interface TrendingCardProps {
  bgImage: string;
  year: number;
  rating: string;
  title: string;
  isBookmarked: boolean;
  category: string;
}

function TrendingCard({
  bgImage,
  year,
  rating,
  title,
  isBookmarked,
  category,
}: TrendingCardProps) {
  const { toggleBookmarked } = useStore();

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={styles.trendingCard}
    >
      <button
        onClick={() => toggleBookmarked(title)}
        className={styles.bookmarked}
      >
        <img src={isBookmarked ? BookmarkFull : BookmarkEmpty} alt="" />
      </button>
      <div className={styles.textContent}>
        <div>
          <div>
            <div className={styles.textTop}>
              {year}{" "}
              <img
                src={category === "Movie" ? CategoryMovie : CategoryTvSeries}
                alt=""
                className={styles.categoryIcon}
              />
              {category === "Movie" ? "Movie" : "TV Series"}
            </div>
            <span className={styles.title}>{title}</span>
          </div>
        </div>
        <div className={styles.rating}>{rating}</div>
      </div>
    </div>
  );
}

export default TrendingCard;