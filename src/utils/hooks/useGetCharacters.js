import { useState, useEffect } from "react";
import axios from "axios";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return { characters };
};

export default useGetCharacters;
