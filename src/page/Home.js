import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminnavbar from '../component/Adminnavbar';
import Allupdate from './Allupdate';
import Alluploaddate from './Alluploaddate';
import Post from './Post';
import Table from './Table';

export class Home extends Component {
  render() {
    return (
        <BrowserRouter>
        <Adminnavbar />
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/allupdate"element={<Allupdate />} />
            <Route path="/alluploaddate"element={<Alluploaddate />} />
            <Route path="/post"element={<Post />} />
           
            
        
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Home