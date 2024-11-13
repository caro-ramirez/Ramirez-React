import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container w-100">
        <Link to="/" className="navbar-brand">Pelu Cozzi</Link> 
        {/* ... */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/productos" className="nav-link">Productos</Link> 
            </li>
            {/* ... otros links ... */}
          </ul>
          {/* ... */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;