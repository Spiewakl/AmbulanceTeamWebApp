import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { logOut } from './Utils/logout.utils';
import lbrm from './Images/lbrm.png';
import './ImageCenter.css';
import { addTeam } from './Utils/addTeam.utils';
import { listTeam } from './Utils/listTeam.utils';

function Dispatcher(){
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    listTeam()
    .then(teams => setTeams(teams))
  }, []);

  if (!teams) return <div>Loading...</div>;
    return (
      <div>
         <ul>
      {teams.map((team) => (
        <li>{team.name}</li>
      ))}
    </ul>
        <div className="center-container">
        <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
        <div className="d-grid gap-4 col-2 mx-auto">
          <MDBBtn onClick={() => addTeam(navigate)}>Dodaj zespół</MDBBtn>
          <MDBBtn onClick={() => logOut(navigate) } color='danger'>Wyloguj</MDBBtn>
        </div>
    </div>
      )
    }

export default Dispatcher