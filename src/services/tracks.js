import { getAlbumTracks, getAllAlbums } from "./albums"

//@params token: string, artistID: [string]

export const getAllArtistTracks = async (token, artists) => {
    let tracklist = []
    for (const artistID of artists) {
        let albumList = await getAllAlbums(token, artistID)
        for (const album of albumList) {
            let albumTracks = await getAlbumTracks(token, album.id)
            console.log(albumTracks)
            for (const track of albumTracks) {
                tracklist.push({
                    id: track.id,
                    name: track.name,
                    uri: track.uri
                })
            }
        }
    }
    return tracklist
}