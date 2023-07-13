import React, { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import taskReducer from "./reducers/taskReducer";

interface IProps {
  children: ReactNode;
}

const TaskProvider = ({ children }: IProps) => {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
