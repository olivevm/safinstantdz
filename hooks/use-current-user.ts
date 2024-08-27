import { getCurrentUser } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["getCurrentUser"],
    queryFn: async () => await getCurrentUser(),
  });
};
