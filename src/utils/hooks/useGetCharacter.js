import { useState, useEffect } from "react";
import axios from "axios";

const useGetCharacter = (id) => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCharacter(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return { character, isLoading };
};

export default useGetCharacter;
