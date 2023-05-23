import React, { useEffect, useState } from 'react';
import '../App.css';

const FilmsComponent = ({ film }) => {

    const [filmName, setFilmName] = useState([])
    useEffect(() => {
        fetch(film)
            .then(resp => resp.json())
            .then(response => {
                setFilmName(response)
            })
    }, [])


    return (
        <>
            <div className='card-body picture'>
                <p>Film Title: <b>{filmName.title}</b></p>
                <p>Director: <b>{filmName.director}</b></p>
                <p>Producer: <b>{filmName.producer}</b></p>
                <p>Date: <b>{filmName.release_date}</b></p>
            </div>
        </>
    )
}

export default FilmsComponent;