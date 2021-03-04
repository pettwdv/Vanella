import React from 'react';
import Me from '../images/Me2.jpg';


function AboutComponent(){
    return(
      <div className="bodyCopy"> 
        <h1>About Daire</h1>
       
        <p>You can call me Dee. I'm a solo female traveler sharing tips, packing guides, videos and photography from around the world. I am a traveler who likes to immerse herself in a new culture. Learning all the there is to know. The good and the bad! When I am not traveling I am a User Experience Designer providing visual and interaction design for all areas of web and mobile design. Traveling and designing for good.</p>
        <img src={Me}  alt="Me" /><br/>
        <h3> Thanks for stopping by!</h3>
        
      </div>
    )
  }
  export default AboutComponent