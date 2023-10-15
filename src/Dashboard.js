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
import lbrm from './Images/lbrm.png';
import { logOut } from './Utils/logout.utils';
import './ImageCenter.css';
import { getStatus, getTeam, getTeamStatus, listTeam } from './Utils/listTeam.utils';
import jwt_decode from "jwt-decode";
import { changeStatus } from './Utils/addTeam.utils';
import { createSocket } from './Utils/webSocket.utils';

function Dashboard(){
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id = decoded.sub
  const [team, setTeam] = useState({});
  const [teamStatus, setTeamStatus] = useState([]);
  
  const refreshComponent = () => {
    getTeam(id)
    .then(team => setTeam(team))
    .then(() => getTeamStatus(id))
    .then(status => setTeamStatus(status))
  };

  useEffect(() => {
    createSocket()
    refreshComponent()
  }, []);

  

  function isVisible(status){
    
    return teamStatus.includes(status)
  }
  
    return (
      <div>
        <div className="center-container">
        <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
       <div style={{textAlign: 'center', marginBottom: 30}}>Twój aktualny status to: {team.status}</div>
        <div className="d-grid gap-4 col-2 mx-auto">
        {isVisible('Wolny - w bazie') && (
         <MDBBtn onClick={() => changeStatus('Wolny - w bazie', team.id, refreshComponent)}>Wolny - w bazie</MDBBtn>
        )}
        {isVisible('Wolny - poza bazą') && (
          <MDBBtn onClick={() => changeStatus('Wolny - poza bazą', team.id, refreshComponent)}>Wolny - poza bazą</MDBBtn>
        )}
         {isVisible('Przyjęcie zlecenia') && (
          <MDBBtn onClick={() => changeStatus('Przyjęcie zlecenia', team.id, refreshComponent)}>Przyjęcie zlecenia</MDBBtn>
        )}
        {isVisible('Dojazd do pacjenta') && (
          <MDBBtn onClick={() => changeStatus('Dojazd do pacjenta', team.id, refreshComponent)}>Dojazd do pacjenta</MDBBtn>
        )}
        {isVisible('W trakcie zlecenia') && (
          <MDBBtn onClick={() => changeStatus('W trakcie zlecenia', team.id, refreshComponent)}>W trakcie zlecenia</MDBBtn>
        )}
        {isVisible('Powrót z pacjentem') && (
          <MDBBtn onClick={() => changeStatus('Powrót z pacjentem', team.id, refreshComponent)}>Powrót z pacjentem</MDBBtn>
        )}
        {isVisible('Dezynfekcja') && (
          <MDBBtn onClick={() => changeStatus('Dezynfekcja', team.id, refreshComponent)}>Dezynfekcja</MDBBtn>
        )}
        {isVisible('Tankowanie/Mycie') && (
          <MDBBtn onClick={() => changeStatus('Tankowanie/Mycie', team.id, refreshComponent)}>Tankowanie/mycie</MDBBtn>
        )}
        {isVisible('Awaria') && (
          <MDBBtn onClick={() => changeStatus('Awaria', team.id, refreshComponent)}>Awaria</MDBBtn>
        )}
        {isVisible('Po dyżurze') && (
          <MDBBtn onClick={() => changeStatus('Po dyżurze', team.id, refreshComponent)}>Po dyżurze</MDBBtn>
        )}
          <MDBBtn onClick={() => logOut(navigate) } color='danger'>Wyloguj</MDBBtn>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center" style={{marginBlock: 50}}>
        <Link to="https://liberandum.pl/logowanie/?fbclid=IwAR3wmS4dJa6PwQIkF4qYi3JivUzxdJ2KfHK1HVSquExDUjoP2m0VyRIKNgo">
          <MDBBtn>Baza wiedzy</MDBBtn>
        </Link>
        <Link to="https://forms.office.com/pages/responsepage.aspx?id=G4LYPRa4z0iZm8H27P0CtpJssRnTIB9EoLeROC5tISRUMDdCU0kzRjdJOTAySTUwRDFFOUJZVDVJVi4u&fbclid=IwAR2n-HnkaYjp6GJB_3xhoirMEnpB1Z0Rd2z0JkU2B6aH5DgnkVrkA26soX8">
        <MDBBtn>Zgłoś incydent</MDBBtn>
        </Link>
        <Link to="https://forms.office.com/pages/responsepage.aspx?id=G4LYPRa4z0iZm8H27P0CtjvxDb0Ri75Msskzpu2Ici9UMlo1MDJNMDE1TlRSRjY0MVI4MDlNOFUzSi4u&fbclid=IwAR2J6uhVgYBYFKr4d7icnoLaj0qk55vN5lK_v71O6FIFedBmz4ViFmik84o">
        <MDBBtn>Zgłoś uszkodzenie karetki</MDBBtn>
        </Link>
        <Link to="https://forms.office.com/pages/responsepage.aspx?id=G4LYPRa4z0iZm8H27P0CtjvxDb0Ri75Msskzpu2Ici9UN1JYRFBaQ1NPVkg2N1ZVVzhMWVhaOFZaSy4u&fbclid=IwAR0IcrdadPz54QatxZexIX3khlB8zGQjSws3FI65aM5Te7Ld5NClGMw26h0">
        <MDBBtn>Zgłoś pomysł</MDBBtn>
        </Link>
        </div>
    </div>
      )
    }

export default Dashboard