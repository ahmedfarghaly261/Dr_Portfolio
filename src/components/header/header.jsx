import "./header.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserDoctor } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <div className="nav_bar">
        <Navbar className="sticky" bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home"><b> <FaUserDoctor style={{ color: "#8873ef", fontSize: "40px" }} /></b>  Navbar </Navbar.Brand>
            <Nav className="-auto" id="">
              <Link style={{ textDecoration: "none" }} to={"/"}><Nav.Link className="active" id="nav_link" href="#home" ><b> Home</b></Nav.Link> </Link>
              <Nav.Link id="nav_link" href="#service"> <b>service </b>  </Nav.Link>
              <Link to={"/booking an appointment"} > <Button id="nav_link_butt" variant="outline-primary"><b>Book an appointment</b></Button>{' '}</Link>
            </Nav>
          </Container>
        </Navbar> </div>

    </>
  )
}
export default Header