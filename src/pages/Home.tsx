import PageWrapper from "../components/PageWrapper";
import { SectionTitle, TrendingCard } from "../components";
import useStore from "../store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  const { movies } = useStore();
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  console.log(movies);

  return (
    <PageWrapper>
      <SectionTitle text="Trending" />
      <Swiper
        spaceBetween={46}
        slidesPerView={1.2}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
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
    </PageWrapper>
  );
}

export default Home;
