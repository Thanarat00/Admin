import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Uploadvedio from './Uploadvedio';





function Editstep() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
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
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <Form>
          <Uploadvedio />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเอียด :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
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
  );
}
export default Editstep