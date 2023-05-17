import React, { useState, useEffect } from 'react';
import '../App.css';
import NavigationComponent from '../components/navigationComponent';



const StarShipsPage = () => {

    const [starships, setStarships] = useState([]);
    const url = 'https://swapi.dev/api';
    const endPointStarships = '/starships/';

    useEffect(() => {
        fetch(`${url}${endPointStarships}`)
            .then(response => response.json())
            .then(resp => {
                console.log(resp.results);
                setStarships(resp.results)
            })
    }, [])

    const rowwSelected = value => {
        console.log('fila seleccionada: ', value.target.innerText)
    }

    return (
        <>
            <NavigationComponent />
            <div className='container' >
                {starships.map(starship => <div key={starship.name} onClick={event => rowwSelected(event)} className='group'>
                    {starship.name}
                    {starship.model}
                </div>)}
            </div>
        </>
    )


};

export default StarShipsPage;
