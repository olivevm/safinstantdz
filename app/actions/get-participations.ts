"use server";

import { customInstance } from "@/utils";

export const getParticipations = async (
  chefId: string,
  limit?: string,
  page?: string
) => {
  return customInstance({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/participations?chefId=${chefId}&page=${page}&limit=${limit}`,
  });
};
