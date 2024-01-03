import { useState, ChangeEvent } from 'react'
import PageWrapper from '../components/PageWrapper'
import {
  SectionTitle,
  TrendingCard,
  StandardCard,
  StandardCardContainer,
  Search,
} from '../components'
import useStore from '../store'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Movie } from '../store'

function Home() {
  const { movies } = useStore()
  const trendingMovies = movies.filter((movie) => movie.isTrending)

  const [userInput, setUserInput] = useState('')

  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setUserInput(inputValue)

    const searchedResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase()),
    )
    setSearchedMovies(searchedResults)
  }

  const displayedMovies = userInput ? searchedMovies : movies

  return (
    <PageWrapper>
      <Search onChange={onSearch} value={userInput} />
      <SectionTitle text="Trending" />
      <Swiper
        slidesPerView={1.6}
        breakpoints={{
          375: {
            slidesPerView: 1.6,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 1.3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1.7,
          },
          1440: {
            slidesPerView: 1.7,
            spaceBetween: 16,
          },
          1920: {
            slidesPerView: 3.6,
            spaceBetween: 16,
          },
        }}>
        {trendingMovies.map((movie) => (
          <SwiperSlide>
            <TrendingCard
              image={movie.thumbnail.trending.small}
              year={movie.year}
              rating={movie.rating}
              title={movie.title}
              isBookmarked={movie.isBookmarked}
              category={movie.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SectionTitle text="Recomended for you" />
      <StandardCardContainer>
        {displayedMovies.map((item) => (
          <StandardCard
            image={item.thumbnail.regular.small}
            title={item.title}
            isBookmarked={item.isBookmarked}
            category={item.category}
            year={item.year}
          />
        ))}
      </StandardCardContainer>
    </PageWrapper>
  )
}

export default Home
