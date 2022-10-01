import React, {  } from 'react'
import Card from 'react-bootstrap/Card';
import Editrearing from '../component/Editrearing';
import './All.css'
import Deleteuser from '../component/Deleteuser';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {MDBBtn, MDBInputGroup,} from 'mdb-react-ui-kit';
import { BsSearch } from "react-icons/bs";
function Rearing ()  {
 
    return (
      <>
<MDBInputGroup tag="form"  className='Search'>
      <input className='form-control' aria-label="Search" type='Search' />
      <MDBBtn outline ><BsSearch /></MDBBtn>
      </MDBInputGroup>
    <div className='Ail'>
    
      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>แมวเปอร์เซีย</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>


      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/2.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
        <Editrearing /><Deleteuser />
      </Card.Body>
    </Card>
      </div>

    
 


      </div>
    
</>

      
    )
  }


export default Rearing