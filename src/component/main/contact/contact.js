import React, { Component } from 'react';
import {useSearchParams } from 'react-router-dom';

const  Contact =() => {
  // query pram value get
  const [searchParams, setSearchParams] = useSearchParams();
  let pramValue = searchParams.get("name");
    return(
      <div>
       <h1>Pram Value:-{pramValue}. <br />Hello, Contact</h1>;
       </div>
    )
  }
  
  export default Contact;