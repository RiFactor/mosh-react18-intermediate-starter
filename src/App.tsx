import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import InfinitePostList from "./react-query/InfinitePostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";

function App() {
  return (
    <div>
      <h1>React Starter Project</h1>
      <br />
      <h4>Global State Management</h4>
      {/* <Counter /> */}
      {/* <TaskList /> */}
      <LoginStatus />
      <br />
      <h4>Fetching and Updating Data with React Query</h4>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <PostList /> */}
      {/* <InfinitePostList /> */}
    </div>
  );
}

export default App;
