import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const FIVE_MINUTES = 5 * 60 * 1000; //  5 minutes

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: FIVE_MINUTES,
      cacheTime: FIVE_MINUTES,
    },
  },
});

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
