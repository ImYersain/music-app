import { useEffect, useState } from "react";
import type { TrackDetailResource } from "../dal/types";
import { getTrack } from "../dal/apiCalls";

export const useTrack = (selectedTrackId: string | null) => {
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailResource | null>(null);

  useEffect(() => {
    if (!selectedTrackId) return;

    getTrack(selectedTrackId).then((data) => setSelectedTrack(data));
  }, [selectedTrackId]);

  return { selectedTrack };
};
