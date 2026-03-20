import { useCallback, useState } from "react";

export const useTrackSelection = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const onSelectTrackId = useCallback((id: string) => {
    setSelectedTrackId(id);
  }, []);

  return {
    selectedTrackId,
    onSelectTrackId,
  };
};
