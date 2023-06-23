import { useState } from "react";
import React from "react";
import useInfinitePosts from "../hooks/useInfinitePosts";

const InfinitePostList = () => {
  const [userId, setUserId] = useState<number>();

  const pageSize = 10; // can convert to useState and provide dropdown for user

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfinitePosts({ pageSize }, userId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => {
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
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      {/* JSON placeholder doesn't provide total # of records ahead of time to know the number of pages to determine the last page */}
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
      >
        {isFetchingNextPage ? "Loading... " : "Load More"}
      </button>
    </>
  );
};

export default InfinitePostList;
