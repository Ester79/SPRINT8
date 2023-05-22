import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

const initialState = {
    email: '',
    password: '',
}

const LoginPage = () => {
    const [state, setState] = useState({ ...initialState });

    const signIn = 'SIGN IN';

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const saveLogin = () => {
        if (state.email === '' || state.password === '') {
            alert('COMPLETE LOGGIN')
        } else {
            localStorage.setItem('Email', JSON.stringify(state.email))
            localStorage.setItem('Password', JSON.stringify(state.password))
            navigate('/home')
        }
    }

    return (
        <>
            <div className="container">
                <div className="starwars">
                    <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
                    <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
                    <h1 className="force" id="byline">May The Force Be With You</h1>
                </div>
            </div>
            <div className='containerForm'>
                <form className='formLogin'>
                    <div className='form-outline mb-4 formInput'>
                        <input type="email" id='formEmail' className='form-control' placeholder='Enter your email' name='email' onChange={emailUser => handleInputChange(emailUser)} />
                    </div>
                    <div className='mb-4 formInput'>
                        <input type='password' id='formPassword' className='form-control' placeholder='Password' name='password' onChange={psswUser => handleInputChange(psswUser)} />
                    </div>
                    <button type='button' className='btnShowMore' onClick={saveLogin}>{signIn}</button>
                </form>

            </div>

        </>
    )
};

export default LoginPage;