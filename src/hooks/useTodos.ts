import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const FetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: FetchTodos,
    staleTime: 5 * 1000,
  });
};

export default useTodos;
