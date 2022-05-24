import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const About = () => {
    let {id} = useParams();
    return(
        <div>
       <h1>{id} About</h1>;
       </div>
    )
  }

export default About;