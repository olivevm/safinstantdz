import { authHeader, customInstance, getToken } from "@/utils";

export const voteForParticipation = async (participationId: string) => {
  const token = getToken();

  return customInstance({
    data: { participationId },
    headers: authHeader(token as string),
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/votes`,
  });
};
