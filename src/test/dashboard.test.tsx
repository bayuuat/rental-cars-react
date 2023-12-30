import { afterEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen, cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "@/pages/auth/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Login Page", () => {
  afterEach(() => {
    cleanup();
  });

  
  it("should displays error messages for required form", async () => {
    render(
      <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <LoginPage />
          </Router>
        </QueryClientProvider>
      </GoogleOAuthProvider>,
    );

    const submitButton = screen.getByText(/Sign In with Email/i);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    });  
  });

  it('should be redirect to / when access token is present in cookies', async () => {
    // Mocking document.cookie to simulate the presence of an access token
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'userauth=mockedAccessToken',
    });
  
    render(
      <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <LoginPage />
          </Router>
        </QueryClientProvider>
      </GoogleOAuthProvider>,
    );
  
    await waitFor(() => {
      const redirectComponent = screen.queryByText('Login to your account');
      expect(redirectComponent).toBeNull(); 
      expect(window.location.pathname).toBe('/');
    });
  });
  
});
