import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineLogout } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";
import Newpassword from './Newpassword';
export class Logout extends Component {
  render() {
    return (
      <div>

                <NavDropdown title={
                                <span className="text-light">&nbsp;&nbsp;&nbsp; <img   src="/images/1.jpg"  className='images' />  Thanarat Sanrum</span>
                               } id="basic-nav-dropdown">
              <NavDropdown.Item ><CgPassword/>&nbsp;<Newpassword/></NavDropdown.Item>
              <NavDropdown.Item ><AiOutlineLogout/>&nbsp;Logout</NavDropdown.Item>
              
              </NavDropdown>

      </div>
    )
  }
}

export default Logout