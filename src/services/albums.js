import { SPOTIFY as sp, options } from "../.env";

export const getAlbumTracks = async (token, albumID) => {
    return fetch(sp.baseURI + "/albums/" + albumID + "/tracks?limit=50", options(token))
      .then((response) => response.json())
      .then((items) => items.items);
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
    });
  res.items.forEach((element) => {
    allData.push(element);
  });
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
    res.items.forEach((element) => {
      allData.push(element);
    });
  }
  return allData;
};
