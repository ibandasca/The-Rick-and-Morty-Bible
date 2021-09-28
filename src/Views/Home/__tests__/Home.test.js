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

  it("renders only the `Next` button when rendering the first page", () => {
    useGetCharacters.mockReturnValue({
      characters: mockCharacters,
      counter: 1,
    });

    renderComponent();

    const nextButton = screen.queryAllByTestId("next-button");

    expect(nextButton.length).toBe(2);
    expect(screen.queryByTestId("previous-button")).not.toBeInTheDocument();
  });

  it("renders the `Previous` and the `Next` button when having a counter bigger than 1", () => {
    useGetCharacters.mockReturnValue({
      characters: mockCharacters,
      counter: 2,
    });

    renderComponent();

    const previoustButton = screen.queryAllByTestId("previous-button");
    const nextButton = screen.queryAllByTestId("next-button");

    expect(previoustButton.length).toBe(2);
    expect(nextButton.length).toBe(2);
  });

  it("renders only the `Previous` buton when rendering the last page", () => {
    useGetCharacters.mockReturnValue({
      characters: mockCharacters,
      counter: 34,
    });

    renderComponent();

    const previoustButton = screen.queryAllByTestId("previous-button");

    expect(previoustButton.length).toBe(2);
    expect(screen.queryByTestId("next-button")).not.toBeInTheDocument();
  });
});
