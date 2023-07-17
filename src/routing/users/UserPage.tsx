import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UserPage = () => {
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

export default UserPage;
