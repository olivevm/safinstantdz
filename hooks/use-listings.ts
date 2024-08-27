import { getParticipations } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";

export const useListings = (chefId: string, limit: string, page: string) => {
  return useQuery({
    queryKey: ["listings", chefId, page],
    queryFn: () => getParticipations(chefId, limit, page),
    enabled: !!chefId,
  });
};
