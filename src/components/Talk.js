  import React from 'react'
  import image from './talk.png'
  import './Talk.css'
  import Fade from 'react-reveal/Fade';

  
  const Talk = () => {
    return (
      <div className="talk">
          <Fade left duration={1500}>
          <img className="talk__image" src={image} alt="" loading="lazy" />
          </Fade>
          <Fade duration={6000}>
          <div className="talk__text">
              <h1>Talk to our experts about your requirements</h1>
              <p>Contact us and know more about how our experts can help your business grow.

</p>
<h4 className="talk__btn">Enquire Now</h4>



          </div>
          </Fade>
        
      </div>
    )
  }
  
  export default Talk
  