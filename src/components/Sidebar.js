//import { getPlaylists } from "../services/playlists";
import { playlistAllTracksArtists } from "../services/misc";
import { useState, useEffect } from "react";

export const Sidebar = (props) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (props.token != null && props.token !== undefined) {
          //getPlaylists(props.token).then(setPlaylists)
          playlistAllTracksArtists(props.token, "150 octubre", "Realizada con javascript", false, [
            "Ran-D", 
            "Sub Zero Project", 
            "Dblock Stefan", 
            "The Prophet",
            "JNXD",
            "Hard Driver",
            "Remzcore",
            "Physika",
            "Ncrypta",
            "Sub Sonik",
            "Lunakorpz"
          ]).then(data => {
            setPlaylists(data)
          })
        }
      }, [props.token]);

    return (
      <ul>
        {playlists.map((playlist) => {
          return (
            <>
              <li>{playlist.name}</li>
            </>
          );
        })}
      </ul>
    );
  }