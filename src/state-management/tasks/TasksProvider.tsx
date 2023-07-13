import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

export interface ITask {
  id: number;
  title: string;
}

interface IAddTask {
  type: "Add";
  task: ITask; // payload
}

interface IDeleteTask {
  type: "Delete";
  taskId: number; // payload
}

export type TTaskAction = IAddTask | IDeleteTask;

const tasksReducer = (tasks: ITask[], action: TTaskAction): ITask[] => {
  switch (action.type) {
    case "Add":
      return [action.task, ...tasks];
    case "Delete":
      return tasks.filter((t) => t.id !== action.taskId);
    default:
      return tasks; // Question TS - unclear- should I include a default case, Mosh didn't
  }
};

interface IProps {
  children: ReactNode;
}

const TasksProvider = ({ children }: IProps) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
