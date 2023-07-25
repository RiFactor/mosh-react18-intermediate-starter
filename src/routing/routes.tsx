import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./users/UserDetail";
import UsersPage from "./users/UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    // root route
    path: "/", // Question: Mosh notes show this without a path, is this correct (followed tutorial)
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // children's paths don't need '/' before but <Link to="/users" /> does
      { index: true, element: <HomePage /> }, // path: "" // either work
      { path: "login", element: <LoginPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    // layout route: group routes to enforce layouts or business rules
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
