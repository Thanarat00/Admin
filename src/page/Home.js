import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminnavbar from '../component/Adminnavbar';
import Allupdate from './Allupdate';
import Table from './Table';

export class Home extends Component {
  render() {
    return (
        <BrowserRouter>
        <Adminnavbar />
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/allupdate"element={<Allupdate />} />
            
        
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Home