import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import Nave from '../img/spaceship-space-6813986_640..png';
import { Link } from "react-router-dom";
import PilotsComponent from '../components/pilotsComponent';
import FilmsComponent from '../components/filmsComponent';

const DetailStarShipsPage = () => {

    const [detail, setDetail] = useState([])
    const [showPilots, setShowPilots] = useState(false)
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
                if (resp.pilots !== [] || resp.pilots !== null || !resp.pilots) {
                    setShowPilots(true)
                }
            })
    }

    return (
        <>
            <div className='container buttons pb-3 '>
                <button className='btn btnLink'><Link to='/home'>HOME</Link></button>
                <button className='btn btnLink'><Link to='/starships'>STARSHIPS</Link></button>
            </div>
            <div className="card mb-3 cardDetail">
                <h2 className="card-title mt-3 text-center mb-3 force">{detail.name}</h2>
                <img src={Nave} alt="nave" height={300} className='picture' />
                <div className="card-body picture ">
                    <p className="card-text">Model - <b>{detail.model}</b></p>
                    <p className="card-text">Class - <b>{detail.starship_class}</b></p>
                    <p className="card-text">Manufacturer - <b>{detail.manufacturer}</b></p>
                    <p className="card-text">Cost - <b>{detail.cost_in_credits} credits</b></p>
                </div>
                <div className='detailGroup' >
                    <div className="card-body picture">
                        <p className="card-text">Crew - <b>{detail.crew}</b></p>
                        <p className="card-text">Passenger capacity - <b>{detail.passengers}</b></p>
                        <p className="card-text">Cargo capacity - <b>{detail.cargo_capacity}</b></p>
                        <p className="card-text">Consumables - <b>{detail.consumables}</b></p>
                    </div>
                    <div className="card-body picture">
                        <p className="card-text">Length - <b>{detail.length} meters</b></p>
                        <p className="card-text">Maximum atmosphere speed - <b>{detail.max_atmosphering_speed} KM/H</b></p>
                        <p className="card-text">Hyperdrive rating - <b>{detail.hyperdrive_rating}</b></p>
                        <p className="card-text">Maximum speed in realspace - <b>{detail.MGLT}</b></p>
                    </div>
                </div>
                <div className='detailGroup'>
                    {showPilots && detail.pilots.map((pilot, index) => <PilotsComponent key={index} pilot={pilot} />)}
                </div>
                <div className='detailGroup'>
                    {showPilots && detail.films.map((film, index) => <FilmsComponent key={index} film={film} />)}
                </div>


            </div>
        </>

    )
}

export default DetailStarShipsPage;