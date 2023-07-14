import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <div>
      <h1>React Starter Project</h1>
      <br />
      <h4>Global State Management</h4>
      <AuthProvider>
        <TasksProvider>
          <Counter />
          <NavBar />
          {/* the homepage contains the tasks list component */}
          <HomePage />
        </TasksProvider>
      </AuthProvider>

      {/* <LoginStatus />
      <br />
      <h4>Fetching and Updating Data with React Query</h4>
      <TodoForm />
      <TodoList />
      <PostList />
      <InfinitePostList /> */}
    </div>
  );
}

export default App;
