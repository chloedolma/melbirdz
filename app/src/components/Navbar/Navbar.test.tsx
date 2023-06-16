import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from ".";

describe("<Navbar />", () => {
  // @ts-expect-error
  let spyOnAlert;

  beforeEach(() => {
    spyOnAlert = jest.spyOn(global.window, "alert");

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      // @ts-expect-error
      json: () => ({
        health: "ok",
      }),
    });

    // eslint-disable-next-line
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  it("should have a logo", () => {
    expect(
      screen.getByRole("img", {
        name: /logo/i,
      })
    ).toBeInTheDocument();
  });

  it("should have a link to home page", () => {
    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toBeInTheDocument();
  });

  it("should have a link to random-bird page", () => {
    expect(
      screen.getByRole("link", {
        name: /random bird/i,
      })
    ).toBeInTheDocument();
  });

  describe("Health check", () => {
    it("should have a link to health check", () => {
      expect(
        screen.getByRole("link", {
          name: /Health Check/i,
        })
      ).toBeInTheDocument();
    });

    it("should open alert when clicked", async () => {
      const anchor = screen.getByRole("link", {
        name: /Health Check/i,
      });

      await userEvent.click(anchor);

      // @ts-expect-error
      expect(spyOnAlert).toHaveBeenCalledTimes(1);

      // @ts-expect-error
      expect(spyOnAlert).toHaveBeenCalledWith("Healthy \ud83d\ude0a");
    });
  });
});

describe("<Navbar /> Error scenario", () => {
  it("should alert user when api is not ok", async () => {
    const spyOnAlert = jest.spyOn(global.window, "alert");

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      // @ts-expect-error
      json: () => ({
        health: "ok - nope",
      }),
    });

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const anchor = screen.getByRole("link", {
      name: /Health Check/i,
    });

    await userEvent.click(anchor);

    expect(spyOnAlert).toHaveBeenCalledTimes(1);
    expect(spyOnAlert).toHaveBeenCalledWith("Unhealthy \ud83d\ude22");
  });

  it("testing", async () => {
    const spyOnAlert = jest.spyOn(global.window, "alert");

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      // @ts-expect-error
      json: () => null,
    });

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const anchor = screen.getByRole("link", {
      name: /Health Check/i,
    });

    await userEvent.click(anchor);

    expect(spyOnAlert).toHaveBeenCalledTimes(1);
    expect(spyOnAlert).toHaveBeenCalledWith("Oops something went wrong");
  });
});
