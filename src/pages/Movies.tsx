import React from "react";
import {
  StandardCardContainer,
  SectionTitle,
  PageWrapper,
  StandardCard,
} from "../components";
import useStore from "../store";

function Movies() {
  const { movies } = useStore();
  const moviesOnly = movies.filter((item) => item.category === "Movie");
  console.log(movies);
  console.log(moviesOnly);
  return (
    <PageWrapper>
      <SectionTitle text="Movies" />
      <StandardCardContainer>
        {moviesOnly.map((item) => (
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

export default Movies;
