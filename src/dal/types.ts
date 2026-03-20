export type Attachment = {
  url: string;
};

export type TrackAttributes = {
  title: string;
  attachments: Attachment[];
};

export type Track = {
  id: string;
  attributes: TrackAttributes;
};

export interface TrackDetailsAttributes extends TrackAttributes {
  lyrics: string;
}

export type TrackDetailResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};
