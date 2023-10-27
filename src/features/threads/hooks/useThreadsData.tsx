import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { API } from "@/libs/api";
import { ThreadPostType } from "@/types";

const fetchThreads = async () => {
  const response = await API.get("/api/v1/threads");
  return response.data;
};

export const useThreadsData = () => {
  return useQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
};

const postNewThread = (thread: ThreadPostType) => {
  return API.post("/api/v1/thread", thread);
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
