import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[] // Dependencies for useEffect
) => {
  // State for manual fetching with useEffect
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // React Query for automatic fetching and caching
  const queryResult = useQuery<FetchResponse<T>, Error>(
    [endpoint, requestConfig], // Unique query key
    async () => {
      const { data } = await apiClient.get<FetchResponse<T>>(
        endpoint,
        requestConfig
      );
      return data;
    },
    {
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
      enabled: !deps, // Disable React Query if dependencies are provided
      retry: 2, // Retry failed requests up to 2 times
      refetchOnWindowFocus: false, // Prevent refetching when window regains focus
    }
  );

  // Manual fetching with useEffect (if dependencies are provided)
  useEffect(
    () => {
      if (!deps) return; // Skip useEffect if no dependencies are provided

      const controller = new AbortController();
      setIsLoading(true);
      setError(null);

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort(); // Cleanup on unmount or dependency change
    },
    deps ? [...deps] : []
  );

  // Return both React Query and useEffect results
  return deps
    ? { data, error, isLoading } // Return useEffect state if dependencies are provided
    : {
        data: queryResult.data?.results || [],
        error: queryResult.error?.message || null,
        isLoading: queryResult.isLoading,
      }; // Return React Query state otherwise
};

export default useData;
