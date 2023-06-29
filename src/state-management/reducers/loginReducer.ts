interface IAction {
  type: "Log In" | "Log Out";
}

const loginReducer = (user: string, action: IAction): string => {
  if (action.type === "Log In") return "Ri";
  if (action.type === "Log Out") return "";
  return user;
};

export default loginReducer;
