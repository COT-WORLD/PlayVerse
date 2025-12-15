import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  enabled: boolean = true
): UseQueryResult<T[], Error> => {
  return useQuery<FetchResponse<T>, Error, T[]>({
    queryKey: [endpoint, requestConfig],
    queryFn: async () => {
      const { data } = await apiClient.get<FetchResponse<T>>(
        endpoint,
        requestConfig
      );
      return data;
    },
    select: (data) => data.results,
    staleTime: 1000 * 60 * 2,
    retry: 2,
    refetchOnWindowFocus: false,
    enabled,
  });
};
export default useData;
