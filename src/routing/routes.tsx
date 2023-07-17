import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./users/UserDetail";
import UserPage from "./users/UserPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // children's paths don't need '/' before but <Link to="/users" /> does
      { index: true, element: <HomePage /> }, // path: "" // either work
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
