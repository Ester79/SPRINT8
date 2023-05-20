import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import NavigationComponent from '../components/navigationComponent';
import { useLocation } from 'react-router-dom';

const DetailStarShipsPage = () => {

    const [detail, setDetail] = useState([])
    const location = useLocation();

    const urlStarShipSelected = useRef(location.state)

    useEffect(() => {
        getDetailsStarshipSelected()
    }, [])


    const getDetailsStarshipSelected = () => {
        fetch(urlStarShipSelected.current)
            .then(response => response.json())
            .then(resp => {
                console.log('detalle: ', resp)
                setDetail(resp)
            })
    }


    return (
        <>
            <NavigationComponent />
            <div className="card mb-3">
                <h5 className="card-title">{detail.name}</h5>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body ">
                    <p className="card-text"><b>MODEL: </b>{detail.model}</p>
                    <p className="card-text"><b>STARSHIP CLASS: </b>{detail.starship_class}</p>
                    <p className="card-text"><b>MANUFACTURER: </b>{detail.manufacturer}</p>
                    <p className="card-text"><b>COST: </b>{detail.cost_in_credits} CREDITS</p>
                </div>
                <div className='group'>
                    <div className="card-body">
                        <p className="card-text"><b>CREW: </b>{detail.crew}</p>
                        <p className="card-text"><b>PASSENGER CAPACITY: </b>{detail.passengers}</p>
                        <p className="card-text"><b>CARGO CAPACITY: </b>{detail.cargo_capacity}</p>
                        <p className="card-text"><b>CONSUMABLES: </b>{detail.consumables}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text"><b>LENGTH: </b>{detail.length} METERS</p>
                        <p className="card-text"><b>MAXIMUM ATMOSPHERING SPEED: </b>{detail.max_atmosphering_speed} KM/H</p>
                        <p className="card-text"><b>HYPERDRIVE RATING: </b>{detail.hyperdrive_rating}</p>
                        <p className="card-text"><b>MAXIMUM SPEED IN REALSPACE: </b>{detail.MGLT} MGLT</p>
                    </div>
                </div>

            </div>

        </>

    )
}

export default DetailStarShipsPage;