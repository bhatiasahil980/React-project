import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"


const NavBar = () => {
    return (
      //header part
<div className="App">

    <p style={{ fontSize: 10 , paddingRight: 1110 , paddingTop: 10}}>भारत सरकार | GOVERNMENT OF INDIA<br></br>
ग्रामीण विकास मंत्रालय  | MINISTRY OF RURAL DEVELOPMENT</p>
<hr img style={{  
      background: '#2bd7f1',
      color: '#2bd7f1',
      borderColor: '#2bd7f1',
      height: '10px',
    
    }}/>
      <Navbar bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
             
              src="https://uploads-ssl.webflow.com/6340fe394585b48bda8e6cb0/634276dbb9d4ce79cfaa71be_Department-of-Land-Resources-780x470-removebg-preview.png"
              width="200"
              height="100"
              className="d-inline-block align-top"
            />
            <img
             
             src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_158/https://www.mehtvta.com/wp-content/uploads/2019/05/ek-kadam-swachhata-ki-aur-300x158.png"
             width="200"
             height="100"
             className="position-absolute top-0 end-0"
             
           />
            
          </Navbar.Brand>
        </Container>
      </Navbar>
     
      <Navbar className='bg-info shadow-1-strong '>
   
      <Container fluid>
          <Nav  className="me-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px' } }
            navbarScroll >
            <Nav.Link href="#action1">About</Nav.Link>
            
          <NavDropdown title="Programmes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Documents" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Act, Rules & Policies</Nav.Link>
            <Nav.Link href="#" >
              Tenders
            </Nav.Link>
          </Nav>
          <a href='/login'><Button  variant="outline-dark">LOGIN</Button></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href='#'><Button variant="outline-dark">REGISTER</Button></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
      
      </Container>
      
    </Navbar>
    </div>
    
 
    
    )
  }
  
  export default NavBar