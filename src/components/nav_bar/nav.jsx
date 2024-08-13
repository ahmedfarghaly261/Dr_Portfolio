import "./nav.css"
import Nav from 'react-bootstrap/Nav';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
function NavBar() {
  return (
    <>
      <div className="navigation">
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link className="nav_link" href="/"> <b><FaPhoneAlt /> +201025362116 </b> </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="nav_link" eventKey="link-1"> <b> <IoMdMail /> ahmedfarghaly201055@gmail.com</b>  </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="nav_link" eventKey="link-2"><b> <SiGooglemaps /> Egypt - Cairo - Helwan </b> </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  )
}
export default NavBar