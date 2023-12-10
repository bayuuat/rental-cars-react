import Home from "@/pages/home/Home";
import LoginPage from "@/pages/auth/Login";
import { createBrowserRouter } from "react-router-dom";
import SearchCars from "@/pages/search-car/SearchCars";
import CreateCar from "@/pages/dashboard/cars/form/CreateCar";
import Admin from "@/pages/dashboard/Layout";
import DashboardHome from "@/pages/dashboard/home/Home";
import Cars from "@/pages/dashboard/cars/Cars";
import ProtectedRoute from "@/components/protected-route/ProtectedRoute";
import UpdateCar from "@/pages/dashboard/cars/form/UpdateCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cari-mobil",
    element: <SearchCars />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/cars",
        element: <Cars />,
      },
      {
        path: "/dashboard/cars/:id",
        element: <UpdateCar />,
      },
      {
        path: "/dashboard/cars/add",
        element: <CreateCar />,
      },
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;
