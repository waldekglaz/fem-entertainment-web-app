import useStore from "../store";

import { Outlet } from "react-router-dom";
import { Header } from "../components";

function Root() {
  const { movies } = useStore();

  const trendingMovies = movies.filter((movie) => movie.isTrending);

  return (
    <>
      <Header />
      <Outlet />
      {/* <h2>Trending</h2>
      {trendingMovies.map((movie) => (
        <div>{movie.title}</div>
      ))}
      <h2>Recomended for you</h2>
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))} */}
    </>
  );
}

export default Root;
