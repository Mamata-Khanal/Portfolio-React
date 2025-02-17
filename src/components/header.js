import React from 'react';
import './header.css';


const Header = () =>{
    return (
        <header className="header" >
            <div className='header-content'>
            <h1> Mamata Khanal </h1>
            <p> QA | Web Developer </p>
            </div>
            <img src='/photo.jpg'  className='circular-image'></img>
        </header>
    );
};
export default Header;