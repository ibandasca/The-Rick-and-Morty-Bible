import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import useGetCharacters from "../../../utils/hooks/useGetCharacters";

jest.mock("../../../utils/hooks/useGetCharacters");

let mockCharacters = [
  {
    id: 12,
    name: "Batman",
    image: "https://batman.com/api/character/avatar/1.jpeg",
  },
];

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home", () => {
  it("renders the view without crashing", () => {
    useGetCharacters.mockReturnValue({
      characters: mockCharacters,
    });

    const { getByText } = renderComponent();

    const avatarContainer = screen.getByTestId("avatar-container");
    const avatarImage = screen.getByTestId("avatar-image");

    expect(avatarContainer).toBeInTheDocument();
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", mockCharacters[0].image);
    expect(avatarImage).toHaveAttribute(
      "alt",
      `${mockCharacters[0].name}-image`
    );
    expect(getByText("Batman")).toBeInTheDocument();
  });
});
