import { useState } from "react";
import { Movie } from "../store";

interface useSearchProps {
  initialState: Movie[];
}

const useSearch = ({ initialState }: useSearchProps) => {
  const [userInput, setUserInput] = useState("");

  const [searchedItems, setSearchedItems] = useState<Movie[]>(initialState);

  const onSearch = (inputValue: string) => {
    setUserInput(inputValue);

    const searchedResults = initialState.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchedItems(searchedResults);
  };

  return { userInput, searchedItems, onSearch };
};

export default useSearch;
