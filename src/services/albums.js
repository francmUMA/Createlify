import { SPOTIFY as sp, options } from "../.env";

export const getAlbumTracks = async (token, albumsIDs) => {
    return fetch(sp.baseURI + "/albums?ids=" + albumsIDs + "&market=ES", options(token))
      .then((response) => response.json())
      .then((items) => {
        return items.albums
      });
};

export const getAllAlbums = async (token, artistID) => {
  let allData = [];
  let offset = 0;
  let res = await fetch(
    sp.baseURI + "/artists/" + artistID + "/albums?include_groups=album%2Csingle&market=ES&limit=50&offset=" + offset,
    options(token)
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
  for (const element of res.items) {
    allData.push(element)
  }
  while (res.total > allData.length) {
    offset += 50;
    res = await fetch(
      sp.baseURI + "/artists/" + artistID + "/albums?include_groups=album%2Csingle&market=ES&limit=50&offset=" + offset,
      options(token)
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    for (const element of res.items) {
      allData.push(element)
    }
  }
  return allData;
};
