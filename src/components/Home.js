import React from 'react'
import './Home.css'
import image from './home_img.png'
import useWebAnimations, { bounce ,fadeIn, fadeInLeft } from "@wellyshen/use-web-animations";


const Home = () => {
    const { ref:img } = useWebAnimations({ ...fadeInLeft });

    const { keyframes, timing } = fadeIn;
const { ref } = useWebAnimations({
  keyframes,
  timing: {
    ...timing,
    delay: 1000, // Delay 1s
  },
});




  return (
    <div className="home">
        <img ref={img} className="home__image" src={image} alt="" />
        <div ref={ref} className="home__text">
        <h1>Innovative and
intelligent technology
solutions and services</h1>
        </div>
      
        
    </div>
  )
}

export default Home
