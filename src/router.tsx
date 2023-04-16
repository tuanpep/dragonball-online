import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layouts/auth-layout/AuthLayout';
import MainLayout from './layouts/main-layout/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Download from './pages/Download';
import Deposit from './pages/Deposit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        index: true,
      },
      {
        path: 'download',
        element: <Download />,
      },
      {
        path: 'deposit',
        element: <Deposit />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
        index: true,
      },
    ],
  },
]);
