import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const getPosts = () => {
    return axios
      .get<Post[]>(
        // `https://jsonplaceholder.typicode.com/posts/?userId=${userId}` // ugly method
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            userId,
          },
        }
      )
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    // users/1/posts
    // when the userId changes, the query is re-executed bc it is a param like dependency in useEffect
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: getPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export default usePosts;
