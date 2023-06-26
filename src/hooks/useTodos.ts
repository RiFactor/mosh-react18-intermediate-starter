import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // queryFn: apiClient.getAll.bind(apiClient), // option to bind 'this', use arrow instead on apiClient
    queryFn: todoService.getAll,
    staleTime: 5 * 1000,
  });
};

export default useTodos;
