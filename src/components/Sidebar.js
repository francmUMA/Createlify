import { getPlaylists } from "../services/playlists";
import { useState, useEffect } from "react";
import "../styles/Sidebar.css"

export const Sidebar = (props) => {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
      getPlaylists(props.token).then(setPlaylists)
    }, [props.token])

    return (
      <ul className="container">
        {playlists.map((playlist) => {
          return (
            <>
              <button class="btn-playlist">{playlist.name}</button>
            </>
          );
        })}
      </ul>
    );
  }