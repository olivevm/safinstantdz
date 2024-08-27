import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

export const httpClient = axios.create({
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> =>
  httpClient({ ...config, ...options }).then((response) => response.data);

export const setGlobalHeaders = (headers: Record<string, string>) => {
  httpClient.defaults.headers.common = headers;
};

export const setBaseURL = (url: string) => {
  httpClient.defaults.baseURL = url;
};

export default httpClient;

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
