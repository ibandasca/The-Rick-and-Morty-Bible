import { useState, useEffect, useContext } from "react";
import { CounterContext } from "../contexts/counter-context";

import { useLazyQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/getCharactersQuery";

const useGetCharacters = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const [characters, setCharacters] = useState([]);

  const [getCharacters, { data }] = useLazyQuery(GET_CHARACTERS, {
    variables: { page: counter },
  });

  const getNextPage = () => {
    setCounter(counter + 1);
    getCharacters();
  };

  const getPreviousPage = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    getCharacters();
  };

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  return { characters, getNextPage, getPreviousPage };
};

export default useGetCharacters;
