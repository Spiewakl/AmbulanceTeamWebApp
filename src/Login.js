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


function Login(){

    
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    
          <MDBInput wrapperClass='mb-4' label='Identyfikator zespołu' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Hasło' id='form2' type='password'/>
        
          <MDBBtn className="mb-4">Zaloguj się</MDBBtn>
     
    
        </MDBContainer>
      )
    }

export default Login