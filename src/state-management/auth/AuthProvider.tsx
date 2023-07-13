import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface ILogInAction {
  type: "Log In";
  username: string;
}
interface ILogOutAction {
  type: "Log Out";
}

export type TAuthAction = ILogInAction | ILogOutAction;

const authReducer = (user: string, action: TAuthAction): string => {
  if (action.type === "Log In") return action.username;
  if (action.type === "Log Out") return ""; // required for other explicit actions e.g. reset p/w
  return user;
};

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
  const [user, authDispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
