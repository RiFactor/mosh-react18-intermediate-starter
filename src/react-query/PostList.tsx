import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();

  const pageSize = 10; // can convert to useState and provide dropdown for user
  const [page, setPage] = useState(1);

  const {
    data: posts,
    error,
    isLoading,
  } = usePosts({ page, pageSize }, userId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => {
          setPage(1);
          setUserId(parseInt(event.target.value));
        }}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      {/* JSON placeholder doesn't provide total # of records ahead of time to know the number of pages to determine the last page */}
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-1"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
