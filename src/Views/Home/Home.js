import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useGetCharacters from "../../utils/hooks/useGetCharacters";

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
  margin-right: 10px;
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
  padding: 30px 5px;
  width: 200px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border: 5px solid #539bf5;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #539bf5;
`;

export const Home = () => {
  const { characters, getNextPage, getPreviousPage } = useGetCharacters();

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => getPreviousPage()}>{`< Previous`}</Button>
        <Button onClick={() => getNextPage()}>{`Next >`}</Button>
      </ButtonContainer>
      <AvatarContainer>
        {characters?.map((character) => {
          return (
            <Avatar key={character.id} data-testid="avatar-container">
              <Image
                src={character.image}
                alt={`${character.name}-image`}
                data-testid="avatar-image"
              />
              <StyledLink to={`/character/${character.id}`}>
                {character.name}
              </StyledLink>
            </Avatar>
          );
        })}
      </AvatarContainer>
    </Container>
  );
};
