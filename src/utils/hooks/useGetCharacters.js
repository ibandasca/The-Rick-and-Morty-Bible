import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { CounterContext } from "../contexts/counter-context";
import { GET_CHARACTERS } from "../../graphql/getCharactersQuery";

const useGetCharacters = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page: counter },
  });

  const getNextPage = () => {
    setCounter(counter + 1);
  };

  const getPreviousPage = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return { data, loading, counter, getNextPage, getPreviousPage };
};

export default useGetCharacters;
