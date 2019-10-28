import React from 'react'

import {
    Link
  } from "react-router-dom";

export default function Navbar({ setActivePage, activePage }) {
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <h1>PokéLANG</h1>
                </div>
                <div className="navbar-menu">
                    <Link 
                        className={"navbar-menu-item" + (activePage === 'homepage' ? ' active' : '')}
                        to="/"
                        onClick={(e) => {
                            setActivePage("homepage")
                        }} 
                    >
                        Home
                    </Link>
                    <Link 
                        className={"navbar-menu-item" + (activePage === 'about' ? ' active' : '')} 
                        to="/about"
                        onClick={(e) => {
                            setActivePage("about")
                        }}
                    >
                        About
                    </Link>
                    <Link 
                        className={"navbar-menu-item" + (activePage === 'docs' ? ' active' : '')}
                        to="/docs"
                        onClick={(e) => {
                            setActivePage("docs")
                        }}
                    >
                        Docs
                    </Link>
                </div>
            </div>
        </nav>
    )
}
