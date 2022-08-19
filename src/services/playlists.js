import { getUserID } from "./user";
import { SPOTIFY as sp, options } from "../.env";

export const createPlaylist = async (token, playlistName, playlistDescription, playlistType) => {
    let useToken = token;
    let userID = await getUserID(token);
  
    return await fetch(sp.baseURI + "/users/" + userID + "/playlists", {
      method: "POST",
      body: JSON.stringify({
        name: playlistName,
        description: playlistDescription,
        public: playlistType
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log("Playlist creada");
        } else {
          console.log("Error al crear playlist");
        }
        return response.json();
      })
      .then((data) => data.id);
};

export const getPlaylists = async (token) => {
    let allData = [];
    let offset = 0;
    let res = await fetch(
      sp.baseURI + "/me/playlists?limit=50&offset=" + offset,
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
        sp.baseURI + "/me/playlists?limit=50&offset=" + offset,
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

export const addTracksPlaylist = async (token, tracklist, playlistID) => {
  let optionsPost = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  }
  if (tracklist.length > 100) {
    let auxTracklist = []
    let auxValue
    
    while (auxTracklist.length < tracklist.length){
      if (tracklist.length - auxTracklist.length < 100) {
        auxValue = tracklist.length - auxTracklist.length
      } else {
        auxValue = 100;
      }
      for (let i = auxTracklist.length; i < auxValue; i++) {
        auxTracklist.push(tracklist[i])
      }
      fetch(sp.baseURI + "/playlists/" + playlistID  + "/tracks?uris=" + auxTracklist)
    }
  } else {
    fetch(sp.baseURI + "/playlists/" + playlistID  + "/tracks?uris=" + tracklist).then((response) => {
      if (response.status == 201) {
        console.log("Tracklist añadido correctamente")
      } else {
        console.log("No se ha podido añadir la tracklist")
      }
    })
  }
}