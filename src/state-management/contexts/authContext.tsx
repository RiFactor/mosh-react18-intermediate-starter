import { Dispatch } from "react";
import { TAuthAction } from "../reducers/authReducer";
import React from "react";

interface IAuthContextType {
  user: string;
  dispatch: Dispatch<TAuthAction>;
}

const AuthContext = React.createContext<IAuthContextType>(
  {} as IAuthContextType
);

export default AuthContext;
