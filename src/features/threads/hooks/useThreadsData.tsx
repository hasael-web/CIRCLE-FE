import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { API } from "@/utils/api";
import { ThreadPostType } from "@/types";

// fetch threads
const fetchThreads = async () => {
  const response = await API.get("/api/v1/threads");
  return response.data;
};

export const useThreads = () => {
  return useQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
};
// fetch threads

// fetch infinite threads
const fetchInfiniteThreads = async ({ pageParam = 1 }) => {
  const response = await API.get(`/api/v1/threads?page=${pageParam}`);
  return response.data;
};

export const useInfiniteThreads = () => {
  return useInfiniteQuery({
    queryKey: ["threads-infinite"],
    queryFn: fetchInfiniteThreads,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.length) {
        return pages.length + 1;
      }

      return undefined;
    },
    initialPageParam: 1,
  });
};
// fetch infinite threads

// post thread
const postThread = (thread: ThreadPostType) => {
  return API.post("/api/v1/thread", thread);
};

export const usePostThread = (reset: () => void) => {
  const queryCLient = useQueryClient();

  return useMutation({
    mutationFn: postThread,
    onSuccess: () => {
      queryCLient.invalidateQueries({
        // queryKey: ["threads"],
        queryKey: ["threads-infinite"],
      });
      reset();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response) {
          error.message = error.response?.data.error;
        }
      }

      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });
};
// post thread
