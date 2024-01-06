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
  const moviesOnly = movies.filter((item) => item.category === "Movie");

  const { onSearch, userInput, searchedItems } = useSearch({
    initialState: movies,
  });

  const displayedMovies = userInput ? searchedItems : moviesOnly;

  return (
    <PageWrapper>
      <Search
        onChange={(e) => onSearch(e.target.value)}
        value={userInput}
        placeholder="Search for Movies"
      />
      <SectionTitle text="Movies" />
      <StandardCardContainer>
        {displayedMovies.map((item, index) => (
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
