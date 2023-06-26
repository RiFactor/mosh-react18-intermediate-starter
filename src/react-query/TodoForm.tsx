import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../hooks/useTodos";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) => {
      // Question -- do I want this to be an async fn?
      return axios
        .post<Todo>("https://jsonplaceholder.typicode.com/posts", todo)
        .then((res) => res.data);
    },
    // onSucess, onError (toast notification), onSettled (either outcome)
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: invalidate the Cache: won't work for JSON placeholder b/c a fake API
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"]
      // });
      // APPROACH 2: update cache data
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
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
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
