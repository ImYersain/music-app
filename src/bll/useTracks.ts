import { useEffect, useState } from "react";
import type { Track } from "../dal/types";
import { getTracksList } from "../dal/apiCalls";

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    getTracksList().then((data) => setTracks(data));
  }, []);

  return {
    tracks,
  };
};
