import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiTwotoneEdit } from "react-icons/ai";
import Uploadvedio from './Uploadvedio';



    function Editrearing() {
                const [show, setShow] = useState(false);

                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="success" onClick={handleShow} size='xl'>
        <AiTwotoneEdit />
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control as="textarea" rows={3} />
                    
            </Form.Group>
          </Form>
        
          
</Modal.Body>
<Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
</Modal>
</>

)
}


export default Editrearing