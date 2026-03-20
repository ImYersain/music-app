const API_KEY = "dbafc67d-ff8e-45b5-ac2e-a72cc4622cc5";

const headers = {
  "api-key": API_KEY,
};

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
