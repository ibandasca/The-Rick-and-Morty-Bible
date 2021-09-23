import { useState, useEffect } from "react";
import axios from "axios";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [counter, setCounter] = useState(1);
  const URL = `https://rickandmortyapi.com/api/character/?page=${counter}`;
  const [currentURL, setCurrentURL] = useState(URL);

  const getURL = (counter) => {
    return `https://rickandmortyapi.com/api/character/?page=${counter}`;
  };

  const getNextPage = () => {
    setCounter(counter + 1);
    setCurrentURL(getURL(counter));
  };

  const getPreviousPage = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setCurrentURL(getURL(counter));
    }
  };

  useEffect(() => {
    axios.get(currentURL).then((res) => {
      setCharacters(res.data.results);
    });
  }, [currentURL]);

  return { characters, getNextPage, getPreviousPage };
};

export default useGetCharacters;
