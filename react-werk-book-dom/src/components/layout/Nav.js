import React from 'react';
import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import './style.css'

const Navbar = () => {
    return (
        <nav className="text-white background-pink mb-6">
            <h1 className='pt-4 mb-4'>Werk-book Exercises</h1>
            <div className='grid-container'>
                <div className='grid-item'>
                    <Link to='/'><div className='pb-1'><FontAwesomeIcon size='2x' icon="home"/></div>home</Link>
                </div>
                <div className='grid-item'>
                    <Link to='/change'><div className='pb-1'><FontAwesomeIcon size='2x' icon="quote-right"/></div>change-exercise</Link>
                </div>
                <div className='grid-item'>
                    <Link to='/click'><div className='pb-1'><FontAwesomeIcon size='2x' icon="mouse-pointer"/></div>click-exercise</Link>
                </div>
                <div className='grid-item'>
                    <Link to='/keypress'><div className='pb-1'><FontAwesomeIcon size='2x' icon="keyboard"/></div>keypress-exercise</Link>
                </div>
                <div className='grid-item'>
                    <Link to='/mouse-move'><div className='pb-1'><FontAwesomeIcon size='2x' icon="mouse"/></div>mousemove-exercise</Link>
                </div>
                <div className='grid-item'>
                    <Link to='/submit'><div className='pb-1'><FontAwesomeIcon size='2x' icon="file-invoice"/></div>submit-exercise</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
