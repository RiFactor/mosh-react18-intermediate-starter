import { useContext } from "react";
import AuthContext from "./auth/authContext";

export const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "Log Out" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "Log In", username: "Ri" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
