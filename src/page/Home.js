import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminnavbar from '../component/Adminnavbar';
import Allupdate from './Allupdate';
import Alluploaddate from './Alluploaddate';
import Onstaus from './Onstaus';
import Post from './Post';
import Table from './Table';
import Offstaus from './Offstaus';
import Editstep1 from './Editstep1';
import Editstep2 from './Editstep2';
import Rearing from './Rearing';
import Call from './Call';
import Detailrearing from '../component/Detailrearing';
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
            <Route path="/on"element={<Onstaus />} />
            <Route path="/off"element={<Offstaus />} />
            <Route path="/rearing" element={<Rearing />} />
            <Route path="/step1"element={<Editstep1 />} />
            <Route path="/step2"element={<Editstep2 />} />
            <Route path="/call"element={<Call />} />
            <Route path="/detail"element={<Detailrearing />} />
            
        
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Home