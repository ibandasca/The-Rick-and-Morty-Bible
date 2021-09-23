import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Character } from "./Views/Character";
import { Home } from "./Views/Home";
import { CounterProvider } from "./utils/contexts/counter-context";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #539bf5;
  margin-bottom: 50px;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Title>The Rick and Morty bible</Title>
        <CounterProvider>
          <Switch>
            <Route exact={true} path="/" children={<Home />} />
            <Route path="/character/:id" children={<Character />} />
          </Switch>
        </CounterProvider>
      </Container>
    </Router>
  );
};

export default App;
