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
import lbrm from './Images/lbrm.png';
import { logOut } from './Utils/logout.utils';
import './ImageCenter.css';

function Dashboard(){
  const navigate = useNavigate();

    return (
      <div>
        <div className="center-container">
        <img src={lbrm} alt="lbrm" className="centered-image"/>
        </div>
        <div className="d-grid gap-4 col-2 mx-auto">
          <MDBBtn>Wolny - w bazie</MDBBtn>
          <MDBBtn>Wolny - poza bazą</MDBBtn>
          <MDBBtn>Przyjęcie zlecenia</MDBBtn>
          <MDBBtn>Dojazd do pacjenta</MDBBtn>
          <MDBBtn>W trakcie zlecenia</MDBBtn>
          <MDBBtn>Powrót z pacjentem</MDBBtn>
          <MDBBtn>Dezynfekcja</MDBBtn>
          <MDBBtn>Tankowanie/mycie</MDBBtn>
          <MDBBtn>Awaria</MDBBtn>
          <MDBBtn>Po dyżurze</MDBBtn>
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