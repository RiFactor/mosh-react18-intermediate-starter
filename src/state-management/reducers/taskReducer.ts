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

const taskReducer = (tasks: ITask[], action: TTaskAction): ITask[] => {
  switch (action.type) {
    case "Add":
      return [action.task, ...tasks];
    case "Delete":
      return tasks.filter((t) => t.id !== action.taskId);
    default:
      return tasks; // Question -- should I include a default case, Mosh didn't
  }
};

export default taskReducer;
