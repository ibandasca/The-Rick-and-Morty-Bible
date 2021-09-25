import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Character } from "./Views/Character";
import { Home } from "./Views/Home";
import { CounterProvider } from "./utils/contexts/counter-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #539bf5;
  margin-bottom: 50px;
`;

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
