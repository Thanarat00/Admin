import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Images () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
    <div className="d-grid gap-2">
      <Button variant="dark" onClick={handleShow}>
        ดูรูปภาพ
      </Button>
      </div>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><img src="https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg" width={600} height={350} /></Modal.Body>
      </Modal>
    </>
    )
  }


export default Images