interface Action {
  type: "Increment" | "Reset";
}

const counterReducer = (state: number, action: Action): number => {
  if (action === "Increment") {
    return state + 1;
  }
  if (action === "Reset") {
    return 0;
  }
  return state;
};

export default counterReducer;
