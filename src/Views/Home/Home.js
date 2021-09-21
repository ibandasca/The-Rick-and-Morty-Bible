import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  align-items: center;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border: 5px solid #539bf5;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #539bf5;
`;

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <Container>
      {characters.map((character) => {
        return (
          <Avatar key={character.id}>
            <Image src={character.image} alt="" />
            <StyledLink to={`/character/${character.id}`}>
              {character.name}
            </StyledLink>
          </Avatar>
        );
      })}
    </Container>
  );
};
