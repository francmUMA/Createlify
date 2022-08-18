import { getAllArtistTracks } from "../services/tracks";
import { useState, useEffect } from "react";

export const Sidebar = (props) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (props.token != null && props.token !== undefined) {
          getAllArtistTracks(props.token, "4f0OXMMSxr0r8Ztx6CdpAl").then(tracks => {
            setPlaylists(tracks)
          });
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