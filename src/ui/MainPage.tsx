import { type FC } from "react";
import { PageTitle } from "./PageTitle";
import { TrackDetails } from "./TrackDetails";
import { Playlist } from "./playlist/Playlist";
import { useTrackSelection } from "../bll/useTrackSelection";

export const MainPage: FC = () => {
  console.log("MainPage rendered");
  const { selectedTrackId, onSelectTrackId } = useTrackSelection();

  return (
    <>
      <PageTitle titleText="Music Player" />

      <Playlist
        selectedTrackId={selectedTrackId}
        onSelectTrackId={onSelectTrackId}
      />

      <hr />

      <TrackDetails selectedTrackId={selectedTrackId} />
    </>
  );
};
