import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Dropdown from "react-bootstrap/Dropdown"; // Asegúrate de tener instalado react-bootstrap

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container w-100">
        <Link to="/" className="navbar-brand">
          Pelu Cozzi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Productos
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/products">
                    Todas
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/shampoo">
                    Shampoo
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/acondicionador">
                    Acondicionador
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/tratamiento">
                    Tratamiento
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/accesorios">
                    Accesorios
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            {/* ... otros links ... */}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;