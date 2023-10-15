import React, { useState } from 'react';
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
import { io } from "socket.io-client";


function Login(){
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = event => {
    setLogin(event.target.value);

    console.log('value is:', event.target.value);
  
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);

    console.log('value is:', event.target.value); 
  
  };
    return (
      <div>
        <div className="center-container">
          <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
        <div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    
          <MDBInput wrapperClass='mb-4' value={login} onChange={handleChange} label='Identyfikator zespołu' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' value={password} onChange={handleChangePassword} label='Hasło' id='form2' type='password'/>
        
          <MDBBtn onClick={() => onLogin(navigate, login, password, "team", "/dashboard") } className="mb-4">Zaloguj zespół</MDBBtn>
          <MDBBtn onClick={() => onLogin(navigate, login, password, "dispatcher", "/dispatcher") } className="mb-4">Zaloguj Dyspozytora</MDBBtn>
     
    
        </MDBContainer>
        </div>
      </div>
      )
    }

export default Login