import { getArtistID } from "./artist"
import { getAllArtistTracks } from "./tracks";
import { createPlaylist, addTracksPlaylist } from "./playlists";

export const playlistAllTracksArtists = async (token, name, description, public, artistsNames) => {
    //1. Sacar las IDs de los artistas
    let artistListIDs = []
    artistsNames.forEach(async artistName => {
        artistListIDs.push(await getArtistID(token, artistName))
    });

    //2. Sacar las canciones de cada uno de los artistas
    let tracklist = []
    artistListIDs.forEach(async artistID => {
        let artistTracks = await getAllArtistTracks(token, artistID)
        artistTracks.forEach(track => {
            tracklist.push(track)
        })
    })

    //3. Crear la playlist
    let playlistID = await createPlaylist(token, name, description, public)

    //4. Añadir la tracklist 
    let filterUris = []
    tracklist.forEach(track => {
        filterUris.push(track.uri)
    })
    addTracksPlaylist(token, tracklist, playlistIDs)

    return tracklist
}