import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBListGroupItem,
  MDBListGroup
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { logOut } from './Utils/logout.utils';
import lbrm from './Images/lbrm.png';
import './ImageCenter.css';
import { addTeam } from './Utils/addTeam.utils';
import { listTeam } from './Utils/listTeam.utils';
import { deleteTeam } from './Utils/deleteTeam.utils';

function Dispatcher(){
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const refresh = () => window.location.reload(true)
  useEffect(() => {
    listTeam()
    .then(teams => setTeams(teams))
  }, []);

  if (!teams) return <div>Loading...</div>;
    return (
      <div>
        
        <div className="center-container">
        <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
        <div className="d-grid gap-4 col-2 mx-auto ">
          <MDBBtn onClick={() => addTeam(navigate)}>Dodaj zespół</MDBBtn>
          <MDBBtn onClick={() => logOut(navigate) } color='danger'>Wyloguj</MDBBtn>
        </div>
        
        
      {teams.map((team) => (
        <div className="center-container">
        <MDBListGroup style={{minWidth: '22rem'}} >
          <MDBListGroupItem tag='a' href='#' action noBorders color='primary' className='px-3 rounded-3 mb-2'>
       <div style={{ color: '#177cd4', textAlign: 'center'}}>{team.name} </div>
       <div style={{textAlign: 'center'}}>Status zespołu: {team.status}</div>
       <button type="button" class="btn btn-warning">Wyślij zespół</button>
       <button type="button" class="btn btn-success" style={{marginInline: 10}}>Zwolnij zespół</button>
       <button type="button" class="btn btn-danger" onClick={() => deleteTeam(refresh, team.id)}>USUŃ</button>
      </MDBListGroupItem>
      </MDBListGroup>
      </div>
      ))}
      
    
    
    
    </div>
    
      )
    }

export default Dispatcher