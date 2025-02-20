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
        </section>
    );
};

export default Projects;
