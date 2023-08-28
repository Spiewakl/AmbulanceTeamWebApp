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
import { loginDispatcher } from './Utils/loginDispatcher.utils';
import lbrm from './Images/lbrm.png';
import './ImageCenter.css';
import { listTeam } from './Utils/listTeam.utils';
import { newTeam } from './Utils/addTeam.utils';


function AddTeam(){
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
    
          <MDBInput  value={login} onChange={handleChange} wrapperClass='mb-4' label='Podaj nowy identyfikator zespołu' id='form1' type='text'/>
          <MDBInput value={password} onChange={handleChangePassword} wrapperClass='mb-4' label='Podaj nowe hasło zespołu' id='form2' type='password'/>
        
          <MDBBtn onClick={() => newTeam(navigate, login, password)} className="mb-4">Potwierdź</MDBBtn>
     
    
        </MDBContainer>
        </div>
        </div>
      )
    }

export default AddTeam