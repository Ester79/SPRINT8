import React, { useEffect, useState } from 'react';
import '../App.css';
import Chewbacca from '../img/chewbacca.jpg';

const PilotsComponent = ({ pilot }) => {

    const [pilotName, setPilotName] = useState([])
    useEffect(() => {
        fetch(pilot)
            .then(resp => resp.json())
            .then(response => {
                setPilotName(response.name)
            })
    }, [])


    return (
        <>
            <div className='card-body picture'>
                <p><b>PILOT</b></p>
                <p> {pilotName}</p>
                <img src={Chewbacca} alt='chewbacca' height={90} />
            </div>
        </>
    )
}

export default PilotsComponent;