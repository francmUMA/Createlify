import { getPlaylists } from "../services/playlists";
import { useState, useEffect } from "react";

export const Sidebar = (props) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (props.token != null) {
          getPlaylists(props.token).then(setPlaylists);
        }
      }, [props.token]);

    return (
      <ul>
        {playlists.map((playlist) => {
          return (
            <>
              <li key={playlist.id}>{playlist.name}</li>
            </>
          );
        })}
      </ul>
    );
  }