import { getOneParticipation } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";

export const useGetOne = (participationId?: string) => {
  return useQuery({
    queryKey: ["getOne", participationId],
    queryFn: () => getOneParticipation(participationId),
    enabled: !!participationId,
  });
};
