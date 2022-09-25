import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { FiPhoneCall } from "react-icons/fi";
export class Vediocall extends Component {
  render() {
    return (
      <div>
        
        <Button variant="primary" size="lg">
        <FiPhoneCall />
      </Button>
        
        </div>
    )
  }
}

export default Vediocall