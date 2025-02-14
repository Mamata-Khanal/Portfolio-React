import React from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar'; 
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';



function App(){
  return (
    <div className='App'>
<Header/>
<Navbar/>  
 <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
  
      
    </div>
  );
}


export default App;
