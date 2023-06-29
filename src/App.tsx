import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import InfinitePostList from "./react-query/InfinitePostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";

function App() {
  return (
    <div>
      <h1>React Starter Project</h1>
      <br />
      <h2>Global State Management</h2>
      <Counter />
      <br />
      <h2>Fetching and Updating Data with React Query</h2>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <PostList /> */}
      {/* <InfinitePostList /> */}
    </div>
  );
}

export default App;
