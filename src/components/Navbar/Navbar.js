import React from 'react'

import {
    Link
  } from "react-router-dom";

export default function Navbar({ setActivePage, activePage, screenWidth }) {
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                {screenWidth > 599 // Don't show the logo if on mobile
                    ? (
                    <div className="navbar-logo">
                        <h1>
                            <Link 
                                className={"navbar-menu-item" + (activePage === 'homepage' ? ' active' : '')}
                                to="/"
                                onClick={(e) => {
                                    setActivePage("homepage")
                                }} 
                            >
                                PokéLANG
                            </Link>
                        </h1>
                    </div>
                    )
                    :
                    null
                }
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
