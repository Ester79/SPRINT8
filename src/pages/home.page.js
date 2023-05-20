import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <>
            <div className="container">
                <div className="starwars">
                    <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
                    <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
                    <h1 className="force" id="byline">May The Force Be With You</h1>
                </div>
                <div className='buttons'>
                    <button className='btn btnLink'><Link to='/starships'>STARSHIPS</Link></button>
                </div>

            </div>
        </>
    )


}

export default HomePage;