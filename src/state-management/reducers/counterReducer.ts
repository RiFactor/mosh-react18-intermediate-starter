interface Action {
  type: "Increment" | "Reset";
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Reset") {
    return 0;
  }
  return state; // throw new Error("Action not supported"); // not necessary w/ TS
};

export default counterReducer;
