"use server";

import { customInstance } from "@/utils";

export const getOneParticipationVotes = async (participationId?: string) => {
  return customInstance({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/participations/${participationId}/votes`,
    method: "GET",
  });
};
