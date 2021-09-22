import { useState, useEffect } from "react";
import axios from "axios";

const useGetCharacter = (id) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setCharacter(res.data);
    });
  }, [id]);

  return { character };
};

export default useGetCharacter;
