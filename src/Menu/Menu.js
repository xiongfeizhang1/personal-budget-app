import React from 'react';

import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
    </div>
  );
}

export default Menu;
