import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Layout from "./layouts/Layout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Register from "./views/Register";
import AdminLayout from "./layouts/AdminLayout";
import Productos from "./views/Productos";
import Ordenes from "./views/Ordenes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Ordenes />
      },
      {
        path: '/admin/productos',
        element: <Productos />
      }
    ]
  }
]);

export default router;
