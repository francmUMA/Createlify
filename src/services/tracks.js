import { getAlbumTracks, getAllAlbums } from "./albums"

//@params token: string, artistID: [string]

export const getAllArtistTracks = async (token, artists) => {
    let tracklist = []
    for (const artistID of artists) {
        let albumList = await getAllAlbums(token, artistID)
        
        //Pasar listas de tamaño 20 -- Se usa una variable auxiliar para llevar el conteo de los albums que se pasan y una lista auxiliar donde se guardan los albumes a pasar
        let auxList = []
        let cont = 0;
        for (const album of albumList){
            auxList.push(album.id)
            cont++;
            if (cont === albumList.length || cont % 20 === 0) {
                let albumsInfo = await getAlbumTracks(token, auxList)
                for (const album of albumsInfo) {
                    for (const track of album.tracks.items){
                        if (!tracklist.map(item => item.name).includes(track.name))
                            tracklist.push({
                                id: track.id,
                                name: track.name,
                                uri: track.uri
                            })
                    }
                }
                console.log(tracklist)
                auxList = []
            }
        }
    }
    return tracklist
}