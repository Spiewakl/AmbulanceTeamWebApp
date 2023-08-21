import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { loginDispatcher } from './Utils/loginDispatcher.utils';
import lbrm from './Images/lbrm.png';
import './ImageCenter.css';


function AddTeam(){
  const navigate = useNavigate();
 
    return (
      <div>
      <div className="center-container">
        <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
        <div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    
          <MDBInput wrapperClass='mb-4' label='Podaj nowy identyfikator zespołu' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Podaj nowe hasło zespołu' id='form2' type='password'/>
        
          <MDBBtn onClick={() => loginDispatcher(navigate)} className="mb-4">Potwierdź</MDBBtn>
     
    
        </MDBContainer>
        </div>
        </div>
      )
    }

export default AddTeam