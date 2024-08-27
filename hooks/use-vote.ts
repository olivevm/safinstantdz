import { useMutation } from "@tanstack/react-query";
import { voteForParticipation } from "@/app/actions";

export const useVote = () => {
  return useMutation({
    mutationKey: ["voteForParticipation"],
    mutationFn: (participationId: string) =>
      voteForParticipation(participationId),
  });
};
