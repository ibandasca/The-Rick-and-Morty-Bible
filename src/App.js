import styled from "styled-components";
import { Home } from "./Views/Home";

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
      <Home />
      })}
    </Container>
  );
};

export default App;
