import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserFriends} from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logout from './Logout';
import Notify from './Notify';
function Adminnavbar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand  className="text-light">HAPPY CAT HOUSE SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/" className="text-light">หน้าแรก</Nav.Link>
            <NavDropdown title={
                                <span className="text-light">การอัพเดท</span>
                               } id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/allupdate">ตรวจสอบการอัพเดท</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/alluploaddate"> อัพเดทการติดตาม</NavDropdown.Item>
             
       
     
            </NavDropdown>
            <Nav.Link  as={Link} to="/post" className="text-light">ตรวจสอบประกาศ</Nav.Link>
            <NavDropdown title={
                                <span className="text-light">ตรวจสอบสถานะแมว</span>
                               } id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/on">รับเลี้ยงแล้ว</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/off"> รอการรับเลี้ยง </NavDropdown.Item>
             
     
            </NavDropdown>
            <Nav.Link  as={Link} to="/rearing" className="text-light">การเลี้ยงแมว</Nav.Link>
            <NavDropdown title={
                                <span className="text-light">ขั้นตอน</span>
                               } id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/step1">ขั้นตอนการรับเลี้ยง</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/step2">ขั้นตอนการประกาศ</NavDropdown.Item>
              
       
     
            </NavDropdown>
            <Nav.Link  as={Link} to="/call" className="text-light">วิดิโอคอล</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
      <Nav className="me-auto">
          <Navbar.Collapse className="justify-content-end">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Notify />
          <Logout />
           
        </Navbar.Collapse>

        </Nav>
    </Navbar>
  );
}

export default Adminnavbar;