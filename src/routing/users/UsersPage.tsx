import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "../hooks/useAuth";

const UsersPage = () => {
  const { user } = useAuth();

  if (!user)
    // navigate fn will update browser url ergo side effect, won't be pure component in render phase
    return <Navigate to="/login" />;

  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
      {/* Question -- thought that this would make the error page component display, or does it need to be an entire page error? */}
      <button
        onClick={() => {
          throw new Error("something failed");
        }}
      >
        Error
      </button>
    </div>
  );
};

export default UsersPage;
