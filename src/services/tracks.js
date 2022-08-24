import { getAlbumTracks, getAllAlbums } from "./albums"

//@params token: string, artistID: [string]

export const getAllArtistTracks = async (token, artists) => {
    let tracklist = []
    for (const artistID of artists) {
        let albumList = await getAllAlbums(token, artistID)
        
        //Pasar listas de tamaño 20
        let albumTracks = await getAlbumTracks(token, albumList)
        for (const track of albumTracks) {
            tracklist.push({
                id: track.id,
                name: track.name,
                uri: track.uri
            })
        }
    }
    return tracklist
}