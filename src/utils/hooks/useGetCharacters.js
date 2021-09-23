import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CounterContext } from "../contexts/counter-context";

const useGetCharacters = () => {
  debugger;
  const { counter, setCounter } = useContext(CounterContext);

  const getURL = (counter) => {
    return `https://rickandmortyapi.com/api/character/?page=${counter}`;
  };
  const [characters, setCharacters] = useState([]);
  const [currentURL, setCurrentURL] = useState(getURL(counter));

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
