
import React,{useState, useEffect} from 'react';
import './navbar.css';


const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5 }
      );

      const sections=document.querySelectorAll('section');
      sections.forEach((section) => observer.observe(section));

      return() => observer.disconnect();
    },[]);

    const scrollToSection =(sectionId) => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({ behavior:'smooth'});
        }
    };

    return(
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li
                className={activeSection==='about'? 'active':''}
                    onClick={() => scrollToSection ('about')} >About
                </li>
                <li className= {activeSection ==='skills ' ? 'active':''} 
                onClick={()=> scrollToSection('skills')}> Skills </li>

                <li className={ activeSection=== 'projects'? 'active':''}
                onClick={()=> scrollToSection('projects')}> Projects</li>

                <li className={ activeSection==='contact'? 'active':''}
                onClick={() => scrollToSection ('contact')}> Contact </li>
            </ul>
        </nav>
    );
};


export default Navbar;