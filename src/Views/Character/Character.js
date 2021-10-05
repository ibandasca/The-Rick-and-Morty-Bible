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

  const { data, loading } = useGetCharacter(id);

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
            {data?.character?.image && (
              <Image
                src={data?.character?.image}
                alt={`${data?.character?.name}-image`}
                data-testid="character-image"
              />
            )}
            {data?.character?.name && <Name>{data?.character?.name}</Name>}
            {data?.character?.species && (
              <div>
                <TitleItem>Species:</TitleItem>
                <ItemInfo>{data?.character?.species}</ItemInfo>
              </div>
            )}
            {data?.character?.gender && (
              <div>
                <TitleItem>Genre:</TitleItem>
                <ItemInfo>{data?.character?.gender}</ItemInfo>
              </div>
            )}
            {data?.character?.location?.name && (
              <div>
                <TitleItem>Location:</TitleItem>
                <ItemInfo>{data?.character?.location.name}</ItemInfo>
              </div>
            )}
            {data?.character?.origin?.name && (
              <div>
                <TitleItem>Origin:</TitleItem>
                <ItemInfo>{data?.character?.origin.name}</ItemInfo>
              </div>
            )}
            {data?.character?.status && (
              <div>
                <TitleItem>Status:</TitleItem>
                <ItemInfo>{data?.character?.status}</ItemInfo>
              </div>
            )}
            {data?.character?.episode?.length && (
              <div>
                <TitleItem>Appears in:</TitleItem>
                <ItemInfo>{`${data?.character?.episode.length} episodes`}</ItemInfo>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};
