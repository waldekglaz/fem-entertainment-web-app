import PageWrapper from "../components/PageWrapper";
import {
  SectionTitle,
  TrendingCard,
  StandardCard,
  StandardCardContainer,
} from "../components";
import useStore from "../store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  const { movies } = useStore();
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  return (
    <PageWrapper>
      <SectionTitle text="Trending" />
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          375: {
            slidesPerView: 1.3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {trendingMovies.map((movie) => (
          <SwiperSlide>
            <TrendingCard
              bgImage={movie.thumbnail.trending.small}
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
        {movies.map((item) => (
          <StandardCard
            imgSrc={item.thumbnail.regular.small}
            title={item.title}
            isBookmarked={item.isBookmarked}
            category={item.category}
            year={item.year}
          />
        ))}
      </StandardCardContainer>
    </PageWrapper>
  );
}

export default Home;
