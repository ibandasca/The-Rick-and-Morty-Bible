import styled from "styled-components";
import { Character } from "./Views/Character";
import { Home } from "./Views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #539bf5;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Title>The Rick and Morty bible</Title>
        <Switch>
          <Route exact={true} path="/" children={<Home />} />
          <Route path="/character/:id" children={<Character />} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
