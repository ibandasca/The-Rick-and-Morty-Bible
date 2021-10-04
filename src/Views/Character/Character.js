import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useGetCharacter from "../../utils/hooks/useGetCharacter";

const StyledLoading = styled.p`
  font-size: 22px;
  color: #539bf5;
`;

const Container = styled.div`
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

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

  const { character, loading } = useGetCharacter(id);

  return (
    <>
      {loading ? (
        <StyledLoading>Loading...</StyledLoading>
      ) : (
        <Container>
          <ButtonContainer>
            <StyledLink to="/">{`< Back`}</StyledLink>
          </ButtonContainer>
          <div data-testid="character-container">
            {character?.character?.image && (
              <Image
                src={character?.character?.image}
                alt={`${character?.character?.name}-image`}
                data-testid="character-image"
              />
            )}
            {character?.character?.name && (
              <Name>{character?.character?.name}</Name>
            )}
            {character?.character?.species && (
              <div>
                <TitleItem>Species:</TitleItem>
                <ItemInfo>{character?.character?.species}</ItemInfo>
              </div>
            )}
            {character?.character?.gender && (
              <div>
                <TitleItem>Genre:</TitleItem>
                <ItemInfo>{character?.character?.gender}</ItemInfo>
              </div>
            )}
            {character?.character?.location?.name && (
              <div>
                <TitleItem>Location:</TitleItem>
                <ItemInfo>{character?.character?.location.name}</ItemInfo>
              </div>
            )}
            {character?.character?.origin?.name && (
              <div>
                <TitleItem>Origin:</TitleItem>
                <ItemInfo>{character?.character?.origin.name}</ItemInfo>
              </div>
            )}
            {character?.character?.status && (
              <div>
                <TitleItem>Status:</TitleItem>
                <ItemInfo>{character?.character?.status}</ItemInfo>
              </div>
            )}
            {character?.character?.episode?.length && (
              <div>
                <TitleItem>Appears in:</TitleItem>
                <ItemInfo>{`${character?.character?.episode.length} episodes`}</ItemInfo>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};
