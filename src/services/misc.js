import { getArtistID } from "./artist"
import { getAllArtistTracks } from "./tracks";
// import { createPlaylist, addTracksPlaylist } from "./playlists";

export const playlistAllTracksArtists = async (token, name, description, type, artistsNames) => {
    //1. Sacar las IDs de los artistas
    let artistListIDs = []
    for (const artistName of artistsNames) {
        artistListIDs.push(await getArtistID(token, artistName))
    }
    console.log(artistListIDs)
    
    //2. Sacar las canciones de cada uno de los artistas
    let tracklist = await getAllArtistTracks(token, artistListIDs)
/*
    //3. Crear la playlist
    let playlistID = await createPlaylist(token, name, description, type)

    //4. Añadir la tracklist 
    let filterUris = []
    tracklist.forEach(track => {
        filterUris.push(track.uri)
    })
    addTracksPlaylist(token, tracklist, playlistID)
*/
    return tracklist
}