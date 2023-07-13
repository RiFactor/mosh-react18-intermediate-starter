import { useReducer } from "react";

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

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "Increment" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "Reset" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
