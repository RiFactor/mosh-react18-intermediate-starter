import { Dispatch } from "react";
import React from "react";
import { TAuthAction } from "./AuthProvider";

interface IAuthContextType {
  user: string; // {id: , username:, ...}
  dispatch: Dispatch<TAuthAction>;
}

const AuthContext = React.createContext<IAuthContextType>(
  {} as IAuthContextType
);

export default AuthContext;
