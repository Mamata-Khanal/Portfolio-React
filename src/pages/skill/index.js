import React from 'react';
import './index.css';

const Skills = () => {
    return(
        <section id="skills" class="skills">
            <h2> Skills </h2>
            <div className='timeline'>
                <div className='timeline-bar'></div>
            <ul>
                <li className='timeline-item'> HTML </li>
                <li className='timeline-item'> CSS</li>
                <li className='timeline-item'> Postman API Testing</li>
                <li className='timeline-item'> Manual testing and Automation Testing </li>
                <li className='timeline-item'> Mobile App Testing</li>
            </ul>
            </div>
        </section>
    );
};

export default  Skills;