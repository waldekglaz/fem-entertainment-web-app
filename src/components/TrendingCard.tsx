import styles from './TrendingCard.module.css'
import BookmarkFull from '../assets/icon-bookmark-full.svg'
import BookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import CategoryMovie from '../assets/icon-category-movie.svg'
import CategoryTvSeries from '../assets/icon-category-tv.svg'
import PlayIcon from '../assets/icon-play.svg'
import useStore from '../store'
import { motion } from 'framer-motion'

export interface CardProps {
  image: string
  year: number
  rating?: string
  title: string
  isBookmarked: boolean
  category: string
  index: number
}

function TrendingCard({
  image,
  year,
  rating,
  title,
  isBookmarked,
  category,
  index,
}: CardProps) {
  const { toggleBookmarked } = useStore()

  return (
    <motion.div
      style={{
        backgroundImage: `url(${image})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className={styles.trendingCard}>
      <button
        onClick={() => toggleBookmarked(title)}
        className={styles.bookmarked}>
        <img src={isBookmarked ? BookmarkFull : BookmarkEmpty} alt="" />
      </button>
      <div className={styles.textContent}>
        <div>
          <div>
            <div className={styles.textTop}>
              {year}{' '}
              <img
                src={category === 'Movie' ? CategoryMovie : CategoryTvSeries}
                alt=""
                className={styles.categoryIcon}
              />
              {category === 'Movie' ? 'Movie' : 'TV Series'}
            </div>
            <span className={styles.title}>{title}</span>
          </div>
        </div>
        <div className={styles.rating}>{rating}</div>
      </div>
      <div className={styles.overlay}>
        <button>
          <img src={PlayIcon} alt="" />
          <span>Play</span>
        </button>
      </div>
    </motion.div>
  )
}

export default TrendingCard
