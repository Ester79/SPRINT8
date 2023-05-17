import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';


const NavigationComponent = () => {

    return (
        <>
            <div>
                <button className='btnLink'><Link to='/'>HOME</Link></button>
                <button className='btnLink'><Link to='/starships'>STARSHIPS</Link></button>
            </div>


        </>
    )
}

export default NavigationComponent;