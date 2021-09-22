import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Character } from "../Character";
import useGetCharacter from "../../../utils/hooks/useGetCharacter";

jest.mock("../../../utils/hooks/useGetCharacter.js");

let mockCharacter = {
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  id: 12,
  gender: "Male",
  name: "Batman",
  image: "https://batman.com/api/character/avatar/1.jpeg",
  location: {
    name: "Earth (Replacement Dimension)",
  },
  origin: {
    name: "Gotham",
  },
  species: "Human",
  status: "Alive",
};

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Character />
    </BrowserRouter>
  );
};

describe("Character", () => {
  it("renders the component without crashing", () => {
    useGetCharacter.mockReturnValue({
      character: mockCharacter,
    });

    const { getByText } = renderComponent();

    const characterContainer = screen.getByTestId("character-container");
    const characterImage = screen.getByTestId("character-image");

    expect(characterContainer).toBeInTheDocument();
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("src", mockCharacter.image);
    expect(characterImage).toHaveAttribute(
      "alt",
      `${mockCharacter.name}-image`
    );
    expect(getByText(mockCharacter.name)).toBeInTheDocument();
    expect(getByText(mockCharacter.gender)).toBeInTheDocument();
    expect(getByText(mockCharacter.location.name)).toBeInTheDocument();
    expect(getByText(mockCharacter.origin.name)).toBeInTheDocument();
    expect(getByText(mockCharacter.species)).toBeInTheDocument();
    expect(getByText(mockCharacter.status)).toBeInTheDocument();
    expect(
      getByText(`${mockCharacter.episode.length} episodes`)
    ).toBeInTheDocument();
  });
});
