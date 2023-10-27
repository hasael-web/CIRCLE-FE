import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { API } from "@/libs/api";
import { ThreadPostType } from "@/types";

const fetchThreads = async () => {
  const response = await API.get("/api/v1/threads");
  return response.data;
};

const fetchInfiniteThreads = async ({ pageParam = 1 }) => {
  const response = await API.get(`/api/v1/threads?page=${pageParam}`);
  return response.data;
};

const postNewThread = (thread: ThreadPostType) => {
  return API.post("/api/v1/thread", thread);
};

export const useThreadsData = () => {
  return useQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
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

export const usePostThread = () => {
  const queryCLient = useQueryClient();

  return useMutation({
    mutationFn: postNewThread,
    onSuccess: () => {
      queryCLient.invalidateQueries({
        queryKey: ["threads"],
      });
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
