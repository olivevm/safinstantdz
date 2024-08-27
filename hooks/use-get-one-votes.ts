import { getOneParticipationVotes } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";

export const useGetOneVotes = (participationId?: string) => {
  return useQuery({
    queryKey: ["getOneVotes", participationId],
    queryFn: () => getOneParticipationVotes(participationId),
    enabled: !!participationId,
  });
};
