import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Avatar = styled.div`
  margin-bottom: 20px;
`;

const Name = styled.div`
  color: #539bf5;
`;

const Image = styled.img`
  height: 80px;
  border: 5px solid #539bf5;
  border-radius: 50%;
`;

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <Container className="App">
      {characters.map((character) => {
        return (
          <Avatar key={character.id}>
            <Image src={character.image} alt="" />
            <Name>{character.name}</Name>
          </Avatar>
        );
      })}
    </Container>
  );
};
