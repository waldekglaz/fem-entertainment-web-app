import {
  StandardCardContainer,
  SectionTitle,
  PageWrapper,
  StandardCard,
} from '../components'
import useStore from '../store'

function Movies() {
  const { movies } = useStore()
  const moviesOnly = movies.filter((item) => item.category === 'Movie')

  return (
    <PageWrapper>
      <SectionTitle text="Movies" />
      <StandardCardContainer>
        {moviesOnly.map((item, index) => (
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
  )
}

export default Movies
