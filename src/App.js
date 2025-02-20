import React from 'react';
import './App.css';
import Header from './pages/header';
import Navbar from './pages/navbar/navbar';
import About from './pages/about';
import Skills from './pages/skill';
import Projects from './pages/project';
import Contact from './pages/contact';
import Footer from './pages/footer';
import ScrollToTopButton from './pages/footer/ScrollToTopButton';

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
  <ScrollToTopButton/>
    </div>
  );
}


export default App;
