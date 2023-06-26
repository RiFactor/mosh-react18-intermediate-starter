import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import InfinitePostList from "./react-query/InfinitePostList";
import TodoForm from "./react-query/TodoForm";

function App() {
  return (
    <div>
      <h1>React Starter Project</h1>
      <TodoForm />
      <TodoList />
      {/* <PostList /> */}
      {/* <InfinitePostList /> */}
    </div>
  );
}

export default App;
