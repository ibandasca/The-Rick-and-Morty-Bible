import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../graphql/getCharacterQuery";

const useGetCharacter = (id) => {
  debugger;
  const [character, setCharacter] = useState({});

  const { loading, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  useEffect(() => {
    setCharacter(data);
  }, [data]);

  return { character, loading };
};

export default useGetCharacter;
