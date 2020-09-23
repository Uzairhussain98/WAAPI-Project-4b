import React from 'react'
import './Weare.css'
import image from './we_are.png'
import Fade from 'react-reveal/Fade';



const Weare = () => {
 



  return (
    <div className="weare">
              <Fade duration={6000}>

        <div className="weare__text">
            <h1 className="weare__head">We Are</h1>
            <p>
            A highly specialized Management team with over 20 combined years of experience in the Healthcare
            industry with proven ability to optimally combine digital technology, skilled resources and 
            efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting,
            Product Management or Service Delivery
            </p>

            <h4 className="abt__btn"> About Us</h4>

        </div>
        </Fade>
        <Fade right duration={1500}>

        <img className="weare__image" src={image} alt=""/>
</Fade>
    </div>
  )
}

export default Weare
