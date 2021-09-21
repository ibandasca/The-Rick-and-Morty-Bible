import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #539bf5;
`;

const App = () => {
  return (
    <Container className="App">
      <Title>The Rick and Morty bible</Title>
    </Container>
  );
};

export default App;
