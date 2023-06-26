import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../hooks/useTodos";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();

  // "variables" in <> are what you pass in
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => {
      // Question -- do I want this to be an async fn?
      return axios
        .post<Todo>("https://jsonplaceholder.typicode.com/posts", todo)
        .then((res) => res.data);
    },
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      // APPROACH 2: update cache data
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current) {
        ref.current.value = "";
      }

      return { previousTodos };
    },
    // onSucess, onError (toast notification), onSettled (either outcome)
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: invalidate the Cache: won't work for JSON placeholder b/c a fake API
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"]
      // });
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => {
          return todo === newTodo ? savedTodo : todo;
        })
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 0, // BED would do
              title: ref.current?.value,
              completed: false,
              userId: 1, // usually dynamic
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button
            // disabled={!ref.current || !ref.current.value}
            disabled={addTodo.isLoading}
            className="btn btn-primary"
          >
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
