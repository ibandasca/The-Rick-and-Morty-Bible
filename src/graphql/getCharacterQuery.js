import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      image
      gender
      location {
        name
      }
      origin {
        name
      }
      status
      species
      episode {
        id
        episode
      }
    }
  }
`;
