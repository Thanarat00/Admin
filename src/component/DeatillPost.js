import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiDetail } from "react-icons/bi";

function DeatillPost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <BiDetail />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src='/images/1.jpg' className='imag'/>
        <br></br><br></br>
        <ul className='ul'>
          <li>
          sdgfdsfdsgdfg
        </li>
        <li>
          sdgfdsfdsgdfg
        </li>
        <li>
          sdgfdsfdsgdfg
        </li>
        <li>
          sdgfdsfdsgdfg
        </li>
        <li>
          sdgfdsfdsgdfg
        </li>
        <li>
          sdgfdsfdsgdfg
        </li>
        </ul>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default DeatillPost
