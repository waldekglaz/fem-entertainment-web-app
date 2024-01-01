import useStore from './store'
import './App.css'

function App() {
  const { movies } = useStore()

  const trendingMovies = movies.filter((movie) => movie.isTrending)

  return (
    <>
      <h2>Trending</h2>
      {trendingMovies.map((movie) => (
        <div>{movie.title}</div>
      ))}
      <h2>Recomended for you</h2>
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </>
  )
}

export default App
