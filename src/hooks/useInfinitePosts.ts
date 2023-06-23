import { useInfiniteQuery } from "@tanstack/react-query";
import axios, { all } from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
  // userId: number; // QUESTION -- is there a neat way to include this in the query object
}

const useInfinitePosts = (query: PostQuery, userId: number | undefined) => {
  const getPosts = ({ pageParam = 1 }) => {
    return axios
      .get<Post[]>(
        // `https://jsonplaceholder.typicode.com/posts/?userId=${userId}` // ugly method
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            userId,
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        }
      )
      .then((res) => res.data);
  };

  return useInfiniteQuery<Post[], Error>({
    // users/1/posts
    // when the userId changes, the query is re-executed bc it is a param like dependency in useEffect
    queryKey: userId ? ["users", userId, "posts", query] : ["posts", query],
    queryFn: getPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 // empty array
        ? allPages.length + 1
        : undefined; // undefined indicates reached last page, best option for JSON placeholder, good API should let us calc # of pages by providing # of results
    },
  });
};

export default useInfinitePosts;
