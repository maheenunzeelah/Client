import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Home=()=>{
    const handleClick=(e)=>{
        localStorage.removeItem('authorization');
        window.location='http://localhost:3000';
    }
    return(
    <div className="home container">
    <ul>
      <li><button id="Getdata" className="btn btn-md btn-success"><Link to='/Getdata'>Get Data</Link></button></li>
      <li><button id="Deletedata" className="btn btn-md btn-warning">Delete Data</button></li>
      <li><button id="logout" className="btn btn-md btn-danger" onClick={handleClick}>Log out</button></li>
      
    </ul>
    </div>
    );}

export default Home;