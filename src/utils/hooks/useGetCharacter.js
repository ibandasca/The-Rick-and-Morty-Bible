import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../graphql/getCharacterQuery";

const useGetCharacter = (id) => {
  const { loading, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  return { data, loading };
};

export default useGetCharacter;
