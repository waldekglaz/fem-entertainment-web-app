import {
  StandardCardContainer,
  SectionTitle,
  PageWrapper,
  StandardCard,
  Search,
} from "../components";
import useSearch from "../hooks/useSearch";
import useStore from "../store";

function Movies() {
  const { movies } = useStore();
  const tvSeriesOnly = movies.filter((item) => item.category === "TV Series");

  const { onSearch, userInput, searchedItems } = useSearch({
    initialState: movies,
  });

  const displayedTvSeries = userInput ? searchedItems : tvSeriesOnly;

  return (
    <PageWrapper>
      <Search
        onChange={(e) => onSearch(e.target.value)}
        value={userInput}
        placeholder="Search for TV series"
      />
      <SectionTitle text="TV Series" />
      <StandardCardContainer>
        {displayedTvSeries.map((item, index) => (
          <StandardCard
            image={item.thumbnail.regular.small}
            title={item.title}
            isBookmarked={item.isBookmarked}
            category={item.category}
            year={item.year}
            index={index}
          />
        ))}
      </StandardCardContainer>
    </PageWrapper>
  );
}

export default Movies;
