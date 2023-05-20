import React, { useState, useEffect } from 'react';
import '../App.css';
import NavigationComponent from '../components/navigationComponent';
import { useNavigate } from "react-router-dom";


const StarShipsPage = () => {

    const [starships, setStarships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const url = 'https://swapi.dev/api';
    const endPointStarships = '/starships/';
    const endPointPage = '?page=';
    const [count, setCount] = useState(0);


    useEffect(() => {
        fetch(`${url}${endPointStarships}${endPointPage}${currentPage}`)
            .then(response => response.json())
            .then(resp => {
                setStarships(starships.concat(resp.results))
                setCount(resp.count)
            })
    }, [currentPage])

    const navigate = useNavigate();

    const handler = url => {
        navigate("/details/", { state: url })
    }

    const incrementPage = () => {
        setCurrentPage(currentPage + 1);
    }

    return (
        <>
            <NavigationComponent />
            <div>
                <ul>
                    {starships.map(function (item, index) {
                        return (
                            <div key={index} onClick={() => handler((item.url))} className='group'>
                                {item.name} {item.model}
                            </div>
                        )
                    })}
                </ul>
            </div>
            {starships.length < count && < button onClick={incrementPage} className='btn btn-primary'>View More</button >
            }

        </>
    )
};

export default StarShipsPage;
