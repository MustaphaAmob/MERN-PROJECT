import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import handleCard from '../redux/reducer/handelCard';

function Navbar() {

    const state = useSelector((state) => state.handleCard)

  return (
    <div className='myNavbar'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand fw-bold fs-5 nav-title" href="#">Amoub Fragrances</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                </ul>
                <div className="buttons">
                    <NavLink to="card" className="btn btn-outline-dark ms-2">
                        <FontAwesomeIcon className='btn-icon' icon={faCartShopping} />
                        Card <span className='num'>{ state.length }</span>
                    </NavLink>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar