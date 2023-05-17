import React, { useState, useEffect } from 'react';
import '../App.css';
import NavigationComponent from '../components/navigationComponent';
import { useNavigate } from "react-router-dom";



const StarShipsPage = () => {

    const [starships, setStarships] = useState([]);
    const url = 'https://swapi.dev/api';
    const endPointStarships = '/starships/';

    useEffect(() => {
        fetch(`${url}${endPointStarships}`)
            .then(response => response.json())
            .then(resp => {
                setStarships(resp.results)
            })
    }, [])

    const navigate = useNavigate();

    const handler = url => {
        navigate("/details/", { state: url })
    }

    const listItems = starships.map(function (item, index) {
        return (
            <div key={index} onClick={() => handler((item.url))} className='group'>
                {item.name} {item.model}
            </div>
        )
    });

    return (
        <>
            <NavigationComponent />
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        </>
    )
};

export default StarShipsPage;
