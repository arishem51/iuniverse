import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const FIVE_MINTUES = 5 * 60 * 1000; //  5 minutues

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: FIVE_MINTUES,
      cacheTime: FIVE_MINTUES,
    },
  },
});

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
