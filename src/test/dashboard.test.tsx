import { afterEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import LoginPage from "@/pages/auth/Login";
import { BrowserRouter } from "react-router-dom";

describe("Login Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the correct page", () => {
    render(<LoginPage />, { wrapper: BrowserRouter });

    expect(screen.queryByText("Login")).not.toBeNull();
    expect(screen.queryByText("Email")).not.toBeNull();
    expect(screen.queryByText("Password")).not.toBeNull();
  });
});
