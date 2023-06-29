export interface Task {
  id: number;
  title: string;
}

interface IAction {
  type: "Add" | "Delete";
  id?: number;
}

const taskReducer = (state: Task[], action: IAction) => {
  if (action.type === "Add")
    return [{ id: Date.now(), title: "Task " + Date.now() }, ...state];
  if (action.type === "Delete") return state.filter((t) => t.id !== action.id);
  return state;
};

export default taskReducer;
