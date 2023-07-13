import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import InfinitePostList from "./react-query/InfinitePostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TasksList from "./state-management/TasksList";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import { useReducer } from "react";
import taskReducer from "./state-management/reducers/taskReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import AuthContext from "./state-management/contexts/authContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <div>
      <h1>React Starter Project</h1>
      <br />
      <h4>Global State Management</h4>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          {/* the homepage contains the tasks list component */}
          <HomePage />
        </TasksProvider>
      </AuthProvider>

      {/* <Counter /> */}
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
