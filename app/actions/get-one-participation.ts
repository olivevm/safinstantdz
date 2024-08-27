"use server";

import { customInstance } from "@/utils";

export const getOneParticipation = async (participationId?: string) => {
  return customInstance({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/participations/${participationId}`,
  });
};
