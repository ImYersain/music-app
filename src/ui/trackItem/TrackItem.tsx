import type { FC } from "react";
import type { Track } from "../../dal/types";
import style from "./TrackItem.module.css";
import clsx from "clsx";

interface ITrackItemProps {
  track: Track;
  isSelectedTrack: boolean;
  onSelectTrackId: (id: string) => void;
}

export const TrackItem: FC<ITrackItemProps> = ({
  track,
  isSelectedTrack,
  onSelectTrackId,
}) => {
  const classNames = clsx({
    [style.track]: true,
    [style.selected]: isSelectedTrack,
  });

  const handleTrackSelect = () => {
    onSelectTrackId(track.id);
  };

  return (
    <li className={classNames}>
      <div onClick={handleTrackSelect}>{track.attributes.title}</div>
      <audio controls src={track.attributes.attachments[0].url} />
    </li>
  );
};
