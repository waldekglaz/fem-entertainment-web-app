import useStore from '../store'
import BookmarkFull from '../assets/icon-bookmark-full.svg'
import BookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import styles from './StandardCard.module.css'
import CategoryMovie from '../assets/icon-category-movie.svg'
import CategoryTvSeries from '../assets/icon-category-tv.svg'
import PlayIcon from '../assets/icon-play.svg'
import { CardProps } from './TrendingCard'
import { motion } from 'framer-motion'

function StandardCard({
  image,
  title,
  isBookmarked,
  category,
  year,
  index,
}: CardProps) {
  const { toggleBookmarked } = useStore()
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}>
      <div className={styles.cardImageContainer}>
        <img src={image} alt={title} className={styles.cardImg} />
        <button
          onClick={() => toggleBookmarked(title)}
          className={styles.bookmarked}>
          <img
            src={isBookmarked ? BookmarkFull : BookmarkEmpty}
            alt=""
            className={styles.icon}
          />
        </button>
        <div className={styles.overlay}>
          <button>
            <img src={PlayIcon} alt="" />
            <span>Play</span>
          </button>
        </div>
      </div>
      <div className={styles.textContent}>
        <span>{year}</span>
        <img
          src={category === 'Movie' ? CategoryMovie : CategoryTvSeries}
          alt=""
          className={styles.categoryIcon}
        />
        <span>{category}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </motion.div>
  )
}

export default StandardCard
