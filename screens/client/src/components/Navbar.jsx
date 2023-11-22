import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css';
  

function Navbar() { 

  const[openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => { 
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src ={Logo}></img>
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/gameplay"> Gameplay </Link>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> SignUp </Link>
            </div>
        </div>
        <div className='Name'><h1>FindMyPES</h1></div>
        <div className='rightSide'></div>
        <Link to="/"> Home </Link>
        <Link to="/gameplay"> Gameplay </Link>
        <Link to="/login"> login</Link>
        <Link to="/signup"> SignUp </Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon/>
        </button>
    </div>
  );
}

export default Navbar;
