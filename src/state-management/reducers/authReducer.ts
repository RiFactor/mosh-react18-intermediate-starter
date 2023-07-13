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

export default authReducer;
