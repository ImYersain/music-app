import { type FC } from "react";
import { useTrack } from "../bll/useTrack";

interface TrackDetailsProps {
  selectedTrackId: string | null;
}

export const TrackDetails: FC<TrackDetailsProps> = ({ selectedTrackId }) => {
  console.log("TrackDetails rendered");
  const { selectedTrack } = useTrack(selectedTrackId);

  return (
    <div>
      {!selectedTrackId && <span>Select a track to see details</span>}
      {selectedTrackId && !selectedTrack && (
        <span>Loading track details...</span>
      )}
      {selectedTrack && (
        <div
          style={
            selectedTrackId !== selectedTrack.id ? { opacity: 0.5 } : undefined
          }
        >
          <h2>{selectedTrack.attributes.title}</h2>
          <p>{selectedTrack.attributes.lyrics}</p>
        </div>
      )}
      {selectedTrackId &&
        selectedTrack &&
        selectedTrack.id !== selectedTrackId && <span>Loading...</span>}
    </div>
  );
};
