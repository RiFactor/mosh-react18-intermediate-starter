import { useReducer, useState } from "react";
import loginReducer from "./reducers/loginReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginReducer, "");

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
      <a onClick={() => dispatch({ type: "Log In" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
