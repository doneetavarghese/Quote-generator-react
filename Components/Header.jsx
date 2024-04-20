import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar style={{backgroundColor:"Thistle"}}>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{color:"MediumVioletRed",fontFamily:"cursive",fontSize:"50px",fontWeight:"bold"}}>Quote Quest </MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header