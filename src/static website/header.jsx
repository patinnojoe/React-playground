import React from 'react';
import logo from '../logo.svg';
import style from '../App.css';

 export function StaticHeader(){
    return (
        <header>
            <nav className='nav-container'>
                <img src={logo} className='logo-img' />
                <ul className='list-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
                
            </nav>
            <h1 className='nav-header'>Fun Facts about React</h1>
        </header>

    )
 }
