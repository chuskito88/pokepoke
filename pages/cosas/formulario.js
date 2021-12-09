import React, { useState, useEffect } from 'react';

const { mongoose } = require('./database');

const SongList = await mongoose.find({});

const addSong = await mongoose.save(title);
    addSong === title;



const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input name="add song" type="submit" value="add song"/>
        </form>
    );
}
export default NewSongForm;