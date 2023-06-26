import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => {
    if (ref.current) {
      ref.current.value = "";
    }
  });

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
