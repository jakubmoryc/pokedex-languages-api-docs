import React from 'react'

import {
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <h1>PokéLANG</h1>
                </div>
                <div className="navbar-menu">
                    <Link className="navbar-menu-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-menu-item" to="/about">
                        About
                    </Link>
                    <Link className="navbar-menu-item" to="/docs">
                        Docs
                    </Link>
                </div>
            </div>
        </nav>
    )
}
