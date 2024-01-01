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
  const tvSeriesOnly = movies.filter((item) => item.category === "TV Series");

  return (
    <PageWrapper>
      <SectionTitle text="TV Series" />
      <StandardCardContainer>
        {tvSeriesOnly.map((item) => (
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
  );
}

export default Movies;
