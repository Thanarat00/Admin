import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';




export class Logins extends Component {
    render() {
        return (
            <div className='Login'> 
          <form>
            <h3><center>Sign In</center></h3>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
                 <button type="submit" className="btn btn-primary"   a href="Home.js">
                Submit
                </button>

            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
         
          </div>
        )
      }
    }


export default Logins