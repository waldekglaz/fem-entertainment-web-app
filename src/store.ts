import { create } from "zustand";
import jsonData from "./data.json";

interface Thumbnail {
  small: string;
  medium?: string;
  large: string;
}

interface Movie {
  title: string;
  thumbnail: {
    trending: Thumbnail;
    regular: Thumbnail;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface State {
  movies: Movie[];
  toggleBookmarked: (movieTitle: string) => void;
}

const useStore = create<State>((set) => ({
  movies: jsonData as Movie[],
  toggleBookmarked: (movieTitle: string) => {
    set((state) => ({
      movies: state.movies.map((movie: Movie) =>
        movie.title === movieTitle
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      ),
    }));
  },
}));

export default useStore;
