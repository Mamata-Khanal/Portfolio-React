import React from 'react';
import './index.css';


const Header = () =>{
    return (
        <header className="header" >
            <div className='header-content'>
                {/* <h1> Mamata Khanal </h1> */}
                <h1> Hi !  I am Mamata Khanal </h1>
                <p> A dedicated Quality Assurance professional with a passion for ensuring excellence in every detail.<br>
                </br> With a keen eye for precision and a commitment to delivering flawless results, <br>
                </br>I specialize in identifying and resolving issues to enhance product quality and user satisfaction.<br>
                </br> Whether it’s testing, process improvement, or ensuring compliance, I thrive on turning challenges into opportunities for success.</p>
            </div>
            <div>
                <img src='/photo.png'  className='circular-image'></img>
                <p style={{
                    textAlign: 'center'
                }}> QA/Web development Learner</p>
            </div>
        </header>
    );
};
export default Header;