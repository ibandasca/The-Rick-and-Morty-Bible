import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useGetCharacters from "../../utils/hooks/useGetCharacters";

const StyledLoading = styled.p`
  font-size: 22px;
  color: #539bf5;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100px;
  border: 1px solid #539bf5;
  border-radius: 5px;
  padding: 10px 5px;
  color: #539bf5;
  background-color: transparent;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
`;

const AvatarContainer = styled.div`
  text-align: center;
  display: inline-flex;
  flex-wrap: wrap;
  width: 70%;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  align-items: center;
  border: 1px solid #539bf5;
  border-radius: 10px;
  padding: 20px 10px 10px 10px;
  width: 200px;
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
  const { characters, loading, getNextPage, getPreviousPage } =
    useGetCharacters();

  return (
    <>
      {loading ? (
        <StyledLoading>Loading...</StyledLoading>
      ) : (
        <Container>
          <ButtonContainer>
            <Button onClick={() => getPreviousPage()}>{`< Previous`}</Button>
            <Button onClick={() => getNextPage()}>{`Next >`}</Button>
          </ButtonContainer>
          <AvatarContainer>
            {characters?.map((character) => {
              return (
                <Avatar key={character.id} data-testid="avatar-container">
                  <StyledLink to={`/character/${character.id}`}>
                    <Image
                      src={character.image}
                      alt={`${character.name}-image`}
                      data-testid="avatar-image"
                    />
                    <p>{character.name}</p>
                  </StyledLink>
                </Avatar>
              );
            })}
          </AvatarContainer>
          <ButtonContainer>
            <Button onClick={() => getPreviousPage()}>{`< Previous`}</Button>
            <Button onClick={() => getNextPage()}>{`Next >`}</Button>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};
