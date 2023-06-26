import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    // queryFn: apiClient.getAll.bind(apiClient), // option to bind 'this'
    staleTime: 5 * 1000,
  });
};

export default useTodos;
