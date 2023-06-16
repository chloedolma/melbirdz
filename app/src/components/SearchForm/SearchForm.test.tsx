import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from ".";

describe("<SearchForm />", () => {
  it.skip("should snapshot", () => {
    const { container } = render(<SearchForm />);

    expect(container).toMatchSnapshot();
    expect(container).toMatchInlineSnapshot();
  });

  it("should contain a tree animation", () => {
    render(<SearchForm />);
    const expectedImage = screen.getByRole("img", {
      name: /tree animation/i,
    });

    expect(expectedImage).toBeInTheDocument();
  });

  it("should contain a searchbox", async () => {
    render(<SearchForm />);
    const searchBox = screen.getByRole("searchbox");

    await userEvent.type(searchBox, "hahah");

    expect(searchBox).toBeInTheDocument();
  });

  it("should contain a submit button", () => {
    render(<SearchForm />);
    const expectedButton = screen.getByRole("button", {
      name: /search/i,
    });

    expect(expectedButton).toBeInTheDocument();
  });
  //WHY DID IT SUGGEST GETBYTEXT?
  it("should contain an svg of a magnifying glass", () => {
    render(<SearchForm />);
    const magnifier = screen.getByText(/magnifyingglass\.svg/i);

    expect(magnifier).toBeInTheDocument();
  });
});
