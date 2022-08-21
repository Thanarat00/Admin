import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserFriends} from "react-icons/fa";
import {Link} from 'react-router-dom';
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
              <NavDropdown.Item  as={Link} to="#"> อัพเดทการติดตาม</NavDropdown.Item>
             
       
     
            </NavDropdown>
            <Nav.Link  as={Link} to="#" className="text-light">ตรวจสอบประกาศ</Nav.Link>
            <Nav.Link  as={Link} to="#" className="text-light">ตรวจสอบสมาชิก</Nav.Link>
            <NavDropdown title={
                                <span className="text-light">ตรวจสอบสถานะแมว</span>
                               } id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="#">รับเลี้ยงแล้ว</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="#"> รอการรับเลี้ยง </NavDropdown.Item>
             
     
            </NavDropdown>
            <Nav.Link  as={Link} to="#" className="text-light">การเลี้ยงแมว</Nav.Link>
            <NavDropdown title={
                                <span className="text-light">ขั้นตอน</span>
                               } id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#">ขั้นตอนการรับเลี้ยง</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">ขั้นตอนการประกาศ</NavDropdown.Item>
              
       
     
            </NavDropdown>
            <Nav.Link  as={Link} to="#" className="text-light">วิดิโอคอล</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
      <Nav className="me-auto">
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link  className='text-light'>< FaUserFriends/> </Nav.Link>
      
   
           
        </Navbar.Collapse>

        </Nav>
    </Navbar>
  );
}

export default Adminnavbar;