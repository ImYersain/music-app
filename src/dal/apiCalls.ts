const API_KEY = import.meta.env.VITE_API_KEY;

const headers: HeadersInit = {};

if (API_KEY) {
  headers["api-key"] = API_KEY;
}

export const getTrack = async (selectedTrackId: string) => {
  try {
    const res = await fetch(
      `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
      {
        headers,
      },
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getTracksList = async () => {
  try {
    const res = await fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
      {
        method: "GET",
        headers,
      },
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
