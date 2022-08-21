import React, { Component } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBInputGroup,} from 'mdb-react-ui-kit';
import { BsSearch } from "react-icons/bs";
import './Teble.css';
import Adduser from '../component/Adduser';
import Deleteuser from '../component/Deleteuser';

export class Table extends Component {
  render() {
    return (
        <div className='tabel'>
          
           <MDBInputGroup tag="form"  className='search'>
           <Deleteuser /> <Adduser />
            <input className='form-control' aria-label="Search" type='Search' />
            <MDBBtn outline ><BsSearch /></MDBBtn>
          </MDBInputGroup>
        <MDBTable>
        <MDBTableHead dark>
          <tr variants ="primary">
            <th scope='col'></th>
            <th scope='col'>#</th>
            <th scope='col'>Image</th>
            <th scope='col'>Username</th>
            <th scope='col'>Password</th>
            <th scope='col'>Firstname</th>
            <th scope='col'>Lastname</th>
            <th scope='col'>Birthday</th>
            <th scope='col'>Age</th>
            <th scope='col'>Sex</th>
            <th scope='col'>E-mail</th>
            <th scope='col'>Tel</th>
            <th scope='col'>Address</th>
            <th scope='col'>More</th>
            <th scope='col'>Home</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope='row'>1</th>
            <td><img src='/images/2.jpg'  className='image' /></td>
            <td>Osdfsdfsfd</td>
            <td>@mdsdfsdsdfsdsdfsdosdfsdsdfsdfsd</td>
            <td>sdfsdfsf</td>
            <td>@mdsdfsdsdsdsdsdo</td>
            <td>20/02/2543</td>
            <td>19</td>
            <td>sdf</td>
            <td>sdfsdfsdfsdfsdfsfsdfffsdf</td>
            <td>0123456789</td>
            <td>sdfsdfsds fsdfsdfsdf sdfsdfsdfsd</td>
            <td>sdfsdfsdfsdsdsdfsd</td>
            <td>sdfsdfsd</td>
          </tr>

          <tr>
            <th><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope='row'>1</th>
            <td><img src='/images/2.jpg'  className='image' /></td>
            <td>Osdfsdfsfd</td>
            <td>@mdsdfsdsdfsdsdfsdosdfsdsdfsdfsd</td>
            <td>sdfsdfsf</td>
            <td>@mdsdfsdsdsdsdsdo</td>
            <td>20/02/2543</td>
            <td>19</td>
            <td>sdf</td>
            <td>sdfsdfsdfsdfsdfsfsdfffsdf</td>
            <td>0123456789</td>
            <td>sdfsdfsds fsdfsdfsdf sdfsdfsdfsd</td>
            <td>sdfsdfsdfsdsdsdfsd</td>
            <td>sdfsdfsd</td>
          </tr>

          <tr>
            <th><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope='row'>1</th>
            <td><img src='/images/2.jpg'  className='image' /></td>
            <td>Osdfsdfsfd</td>
            <td>@mdsdfsdsdfsdsdfsdosdfsdsdfsdfsd</td>
            <td>sdfsdfsf</td>
            <td>@mdsdfsdsdsdsdsdo</td>
            <td>20/02/2543</td>
            <td>19</td>
            <td>sdf</td>
            <td>sdfsdfsdfsdfsdfsfsdfffsdf</td>
            <td>0123456789</td>
            <td>sdfsdfsds fsdfsdfsdf sdfsdfsdfsd</td>
            <td>sdfsdfsdfsdsdsdfsd</td>
            <td>sdfsdfsd</td>
          </tr>

          <tr>
            <th><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope='row'>1</th>
            <td><img src='/images/2.jpg'  className='image' /></td>
            <td>Osdfsdfsfd</td>
            <td>@mdsdfsdsdfsdsdfsdosdfsdsdfsdfsd</td>
            <td>sdfsdfsf</td>
            <td>@mdsdfsdsdsdsdsdo</td>
            <td>20/02/2543</td>
            <td>19</td>
            <td>sdf</td>
            <td>sdfsdfsdfsdfsdfsfsdfffsdf</td>
            <td>0123456789</td>
            <td>sdfsdfsds fsdfsdfsdf sdfsdfsdfsd</td>
            <td>sdfsdfsdfsdsdsdfsd</td>
            <td>sdfsdfsd</td>
          </tr>

          <tr>
            <th><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope='row'>1</th>
            <td><img src='/images/2.jpg'  className='image' /></td>
            <td>Osdfsdfsfd</td>
            <td>@mdsdfsdsdfsdsdfsdosdfsdsdfsdfsd</td>
            <td>sdfsdfsf</td>
            <td>@mdsdfsdsdsdsdsdo</td>
            <td>20/02/2543</td>
            <td>19</td>
            <td>sdf</td>
            <td>sdfsdfsdfsdfsdfsfsdfffsdf</td>
            <td>0123456789</td>
            <td>sdfsdfsds fsdfsdfsdf sdfsdfsdfsd</td>
            <td>sdfsdfsdfsdsdsdfsd</td>
            <td>sdfsdfsd</td>
          </tr>

          <tr>
            <th><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope='row'>1</th>
            <td><img src='/images/2.jpg'  className='image' /></td>
            <td>Osdfsdfsfd</td>
            <td>@mdsdfsdsdfsdsdfsdosdfsdsdfsdfsd</td>
            <td>sdfsdfsf</td>
            <td>@mdsdfsdsdsdsdsdo</td>
            <td>20/02/2543</td>
            <td>19</td>
            <td>sdf</td>
            <td>sdfsdfsdfsdfsdfsfsdfffsdf</td>
            <td>0123456789</td>
            <td>sdfsdfsds fsdfsdfsdf sdfsdfsdfsd</td>
            <td>sdfsdfsdfsdsdsdfsd</td>
            <td>sdfsdfsd</td>
          </tr>

         
        </MDBTableBody>
      </MDBTable>
      </div>
    )
  }
}

export default Table