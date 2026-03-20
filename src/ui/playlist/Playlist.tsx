import { type FC } from "react";
import { useTracks } from "../../bll/useTracks";
import { TrackItem } from "../trackItem/TrackItem";
import styles from "./Playlist.module.css";

interface PlaylistProps {
  onSelectTrackId: (id: string) => void;
  selectedTrackId: string | null;
}

export const Playlist: FC<PlaylistProps> = ({
  selectedTrackId,
  onSelectTrackId,
}) => {
  console.log("Playlist rendered");
  const { tracks } = useTracks();

  return (
    <ul className={styles.tracks}>
      {tracks === null && <span>Loading tracks...</span>}
      {tracks?.length === 0 && <span>No tracks available</span>}
      {tracks &&
        tracks.length > 0 &&
        tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelectedTrack={selectedTrackId === track.id}
              onSelectTrackId={onSelectTrackId}
            />
          );
        })}
    </ul>
  );
};
