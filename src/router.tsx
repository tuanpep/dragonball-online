import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout/AuthLayout";
import MainLayout from "./layouts/main-layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            }
        ]
    },

])