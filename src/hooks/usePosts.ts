import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
  const getPosts = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export default usePosts;
