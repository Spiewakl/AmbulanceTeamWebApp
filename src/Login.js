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
import { onLogin } from './Utils/login.utils';
import { loginDispatcher } from './Utils/loginDispatcher.utils';
import lbrm from './Images/lbrm.png';
import './ImageCenter.css';


function Login(){
  const navigate = useNavigate();
 
    return (
      <div>
        <div className="center-container">
          <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
        <div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    
          <MDBInput wrapperClass='mb-4' label='Identyfikator zespołu' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Hasło' id='form2' type='password'/>
        
          <MDBBtn onClick={() => onLogin(navigate) } className="mb-4">Zaloguj zespół</MDBBtn>
          <MDBBtn onClick={() => loginDispatcher(navigate) } className="mb-4">Zaloguj Dyspozytora</MDBBtn>
     
    
        </MDBContainer>
        </div>
      </div>
      )
    }

export default Login