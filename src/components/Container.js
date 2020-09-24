 import React from 'react'
 import './Container.css'
 import Zoom from 'react-reveal/Zoom';

 
 const Container = () => {






   return (
     <div  className="container">
       <Zoom duration={2000}>
       <div className="container__head">
        <h3 style={{fontWeight:100}}>Economical,<br/> dynamic and managed business solutions
 </h3>
 
      <div className="column__container">
        <div className="column">
       <h3>Improved efficiency</h3>
       <br/>
       <p> reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core areas.</p>
       </div>
       <div className="column">
  <h3> Reduced Cost</h3>     
    <br/>
   <p>Our solutions are crafted to bring effective change in your business by ensuring cost-effective and reliable operation methodologies.</p>
       </div>

       <div className="column">
  <h3>Overarching Impact</h3>
  <br/>

       <p> By ensuring quality process management we can ensure a comprehensive impact on your business.</p>
       </div>







      </div>





       </div>
       </Zoom>
     </div>
   )
 }
 
 export default Container
 