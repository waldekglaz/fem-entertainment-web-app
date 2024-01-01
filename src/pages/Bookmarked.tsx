import React from "react";
import PageWrapper from "../components/PageWrapper";
import useStore from "../store";
import {
  StandardCard,
  StandardCardContainer,
  SectionTitle,
  NoItems,
} from "../components";

function Bookmarked() {
  const { movies } = useStore();
  const bookmarkedMovies = movies
    .filter((item) => item.category === "Movie")
    .filter((movie) => movie.isBookmarked);
  const bookmarkedTvSeries = movies
    .filter((item) => item.category === "TV Series")
    .filter((series) => series.isBookmarked);

  return (
    <PageWrapper>
      <SectionTitle text="Bookmarked Movies" />
      {bookmarkedMovies.length === 0 ? (
        <NoItems />
      ) : (
        <StandardCardContainer>
          {bookmarkedMovies.map((item) => (
            <StandardCard
              image={item.thumbnail.regular.small}
              title={item.title}
              isBookmarked={item.isBookmarked}
              category={item.category}
              year={item.year}
            />
          ))}
        </StandardCardContainer>
      )}

      <SectionTitle text="Bookmarked TV Series" />
      {bookmarkedTvSeries.length === 0 ? (
        <NoItems />
      ) : (
        <StandardCardContainer>
          {bookmarkedTvSeries.map((item) => (
            <StandardCard
              image={item.thumbnail.regular.small}
              title={item.title}
              isBookmarked={item.isBookmarked}
              category={item.category}
              year={item.year}
            />
          ))}
        </StandardCardContainer>
      )}
    </PageWrapper>
  );
}

export default Bookmarked;
