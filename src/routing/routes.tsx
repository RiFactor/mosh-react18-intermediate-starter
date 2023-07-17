import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // children's paths don't need '/' before but <Link to="/users" /> does
      { index: true, element: <HomePage /> }, // path: "" // either work
      { path: "users", element: <UserListPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "users/:id", element: <UserDetailPage /> },
    ],
  },
]);

export default router;
