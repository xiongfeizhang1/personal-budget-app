import React from 'react';

import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <div id="menuBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/budget">Dashboard</Link></li>

            
    </div>
  );
}

export default Menu;
