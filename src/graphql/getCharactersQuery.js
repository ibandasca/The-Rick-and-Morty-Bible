import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        id
      }
    }
  }
`;
