import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should show heading to user", () => {
    render(<Footer />);
    const expectedHeading = screen.getByRole("heading", {
      name: /© chloe \- part time bird fanatic/i,
      level: 2,
    });

    expect(expectedHeading).toBeInTheDocument();
  });

  it("should render a footer in the document", () => {
    render(<Footer />);
    const expectedFooter = screen.getByRole("contentinfo");

    expect(expectedFooter).toBeInTheDocument();
  });
});
