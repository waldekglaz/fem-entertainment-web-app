import React from "react";
import PageWrapper from "../components/PageWrapper";
import useStore from "../store";
import { StandardCard } from "../components";

function Bookmarked() {
  const { movies } = useStore();
  const bookmarked = movies.filter((item) => item.isBookmarked);
  return (
    <PageWrapper>
      {bookmarked.map((item) => (
        <StandardCard
          imgSrc={item.thumbnail.regular.small}
          title={item.title}
          isBookmarked={item.isBookmarked}
          category={item.category}
          year={item.year}
        />
      ))}
    </PageWrapper>
  );
}

export default Bookmarked;
