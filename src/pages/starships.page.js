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


    const handler = (url, name) => {
        console.log('url: ', url);
        console.log('name: ', name);
    }

    const listItems = starships.map(function (item, index) {
        return (
            <div key={index} onClick={() => handler((item.url), (item.name))} className='group'>
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
