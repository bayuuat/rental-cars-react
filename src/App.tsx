import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const queryClient = new QueryClient();

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
