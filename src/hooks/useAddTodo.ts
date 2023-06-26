import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import ApiClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (addTodo: () => void) => {
  const queryClient = useQueryClient();

  // "variables" in <> are what you pass in
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      // APPROACH 2: update cache data
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      addTodo();

      return { previousTodos };
    },
    // onSucess, onError (toast notification), onSettled (either outcome)
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: invalidate the Cache: won't work for JSON placeholder b/c a fake API
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS
      // });
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => {
          return todo === newTodo ? savedTodo : todo;
        })
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
