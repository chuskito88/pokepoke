import React, { useState } from 'react'
import NewSongForm from './formulario';
import { v4 as uuidv4 } from 'uuid';


const SongList = () => {
  const [songs, setsongs] = useState([
    {
        title: "Mr Brightside",
        id: 1,
    },
    {
        title: "Busy Earnin",
        id: 2,
    },
    {
        title: "We will rock you",
        id: 3,
    }
]);
const addSong = (title) => {
    setsongs([...songs, { title, id: uuidv4() }]);
}

  return (
    <div className="song-list">
        <h1>Songs</h1>
        <ul>
            {songs.map(song => {
                return (<li key={song.id}>{song.title}</li>);
            })}
        </ul>
        <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
