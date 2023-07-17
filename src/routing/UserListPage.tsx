import { Link, Outlet } from "react-router-dom";

const UserListPage = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <div className="flex flex-row">
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {/*  Answered /users/:id, for continuation, not user */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default UserListPage;
