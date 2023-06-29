import React, { Dispatch } from "react";
import { ITask, TTaskAction } from "../reducers/taskReducer";

//obj transported using React Context
interface ITasksContextType {
  tasks: ITask[];
  dispatch: Dispatch<TTaskAction>;
}

const TasksContext = React.createContext<ITasksContextType>(
  {} as ITasksContextType
); // default value (not usually needed) therefore null (doesn't make sense) or empty obj

export default TasksContext;
