import React from 'react'
import './index.css'

const Projects = () =>{
    return(
        <section id="projects" className='projects'>
            <h2> Projects </h2>
            <div className='project-list'>
                <div className='project-item'>
                    <h3> Project 1</h3>
                    <p> Creating and executing test cases</p>
                </div>

                <div className='project-item'>
                    <h3> Project 2</h3>
                    <p> Manual and Automation Testing.<br></br>
                        Mobile App Testing 
                    </p>
                </div>

                <div className='project-item'>
                    <h3> Project 3</h3>
                    <p> API and Postman Testing </p>
                </div>
            </div>


            {/* Training and certification field*/}
            <h2> Training and certification </h2>
            <div className='training-list'> <ul>
                <li><h3><strong> Data Science ( Deerwalk Institute of technology) </strong> </h3></li>
                <li> <h3> <strong> Graphics Designing (Code For Change) </strong></h3> </li>
            </ul>
            </div>
        </section>
    );
};

export default Projects;
