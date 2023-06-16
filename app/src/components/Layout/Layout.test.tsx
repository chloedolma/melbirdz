import { render, screen } from "@testing-library/react";
import { Layout } from ".";

jest.mock("react-router-dom", () => ({
  Outlet: () => <h1>Hello world</h1>,
}));

describe("<Layout />", () => {
  it("should contain an Outlet", () => {
    render(<Layout />);

    expect(
      screen.getByRole("heading", { level: 1, name: /hello world/i })
    ).toBeInTheDocument();
  });
});
