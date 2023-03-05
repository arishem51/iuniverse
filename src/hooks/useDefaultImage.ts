import React from "react";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  id: number;
  defaultSource: string;
  newSource: string | undefined;
};

export function useDefaultImage({ id, defaultSource, newSource }: Props) {
  const queryClient = useQueryClient();

  const [source, setSource] = React.useState(() => {
    return (
      queryClient.getQueryData<string | undefined>(
        ["list-components", "images", id],
        {
          exact: true,
        }
      ) || defaultSource
    );
  });

  const queryKey = ["list-components", "images", id];

  function onLoad() {
    if (!newSource || source !== defaultSource) {
      return;
    }
    queryClient.setQueryData(queryKey, newSource);
    queryClient.setQueryDefaults(queryKey, {
      staleTime: Infinity,
      cacheTime: Infinity,
    });
    setSource(newSource);
  }

  return {
    onLoad,
    source,
  };
}
