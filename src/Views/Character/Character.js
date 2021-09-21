import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  margin-top: 20px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #539bf5;
`;

const Name = styled.h1`
  color: #539bf5;
`;

const TitleItem = styled.h4`
  color: #539bf5;
  margin-bottom: -10px;
`;

const ItemInfo = styled.p`
  color: white;
`;

const StyledLink = styled(Link)`
  color: #539bf5;
  border: 1px solid #539bf5;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
`;

export const Character = () => {
  let { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setCharacter(res.data);
    });
  }, [id]);

  return (
    <div>
      <Image src={character.image} alt={`${character.name}`} />
      <Name>{character.name}</Name>
      <div>
        <TitleItem>Species:</TitleItem>
        <ItemInfo>{character.species}</ItemInfo>
      </div>
      <div>
        <TitleItem>Genre:</TitleItem>
        <ItemInfo>{character.gender}</ItemInfo>
      </div>
      {character.location?.name && (
        <div>
          <TitleItem>Location:</TitleItem>
          <ItemInfo>{character.location.name}</ItemInfo>
        </div>
      )}
      {character.origin?.name && (
        <div>
          <TitleItem>Origin:</TitleItem>
          <ItemInfo>{character.origin.name}</ItemInfo>
        </div>
      )}
      {character.status && (
        <div>
          <TitleItem>Status:</TitleItem>
          <ItemInfo>{character.status}</ItemInfo>
        </div>
      )}
      {character.episode?.length && (
        <div>
          <TitleItem>Appears in:</TitleItem>
          <ItemInfo>{`${character.episode.length} episodes`}</ItemInfo>
        </div>
      )}
      <StyledLink to="/">Back</StyledLink>
    </div>
  );
};
