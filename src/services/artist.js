import { SPOTIFY as sp, options } from "../.env"

export const getArtistID = async (token, name) => {
    return fetch(sp.baseURI + "/search?q=" + name + "&type=artist&market=ES&limit=1")
    .then((response) => response.json())
    .then(JSONartist => JSONartist.artists.items[0].id)
}