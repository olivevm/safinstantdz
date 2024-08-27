import { authHeader, customInstance, getToken } from "@/utils";

export const getCurrentUser = async () => {
  const token = getToken();

  return customInstance({
    headers: authHeader(token as string),
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/me`,
  });
};
