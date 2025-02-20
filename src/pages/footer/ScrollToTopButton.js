import React,{useState,useEffect } from 'react';
// import "./ScrollToTopButton.css";

const ScrollToTopButton =() =>{
    const [isVisible, setIsVisisble]=useState(false);

    // Show the button when the user scrolls down 300px

    const toggleVisibility =() =>{
        if (window.pageYOffset >300){
            setIsVisisble(true);
        } else{
            setIsVisisble(false);
        }
    };

    // Scroll to the top of the page smoothly 
    const scrollToTop =() =>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };

    // Add a scroll event listener when the component mounts 
    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibility);
        return() => {
            window.removeEventListener("scroll",toggleVisibility);
        };
    }, []);
    return(
        <div className='scroll-to-top'>
            {isVisible&&(
                <button onClick={scrollToTop} className='scroll-to-top-button'>Page up
 </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;