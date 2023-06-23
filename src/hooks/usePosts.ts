import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
  // userId: number; // QUESTION -- is there a neat way to include this in the query object
}

const usePosts = (query: PostQuery, userId: number | undefined) => {
  const getPosts = () => {
    return axios
      .get<Post[]>(
        // `https://jsonplaceholder.typicode.com/posts/?userId=${userId}` // ugly method
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            userId,
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        }
      )
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    // users/1/posts
    // when the userId changes, the query is re-executed bc it is a param like dependency in useEffect
    queryKey: userId ? ["users", userId, "posts", query] : ["posts", query],
    queryFn: getPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
    keepPreviousData: true,
  });
};

export default usePosts;
