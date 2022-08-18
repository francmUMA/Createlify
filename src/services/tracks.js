import { SPOTIFT as sp, options } from "../.env"
import { getAlbumTracks, getAllAlbums } from "./albums"

export const getAllArtistTracks = async (token, artistID) => {
    let tracklist = []
    let albumList = await getAllAlbums(token, artistID)
    albumList.forEach(album => {
        let albumTracks = await getAlbumTracks(token, album.id)
        albumTracks.forEach(track => {
            tracklist.push({
                id: track.id,
                name: track.name,
                uri: track.uri
            })
        })
    })
    return tracklist
}