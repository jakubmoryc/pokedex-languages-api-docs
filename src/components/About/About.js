import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

export default function About() {

    return (
        <div className="about">
            <div className="pageWrapper page-docs">
                <div className="tableOfContents-sticky">
                    <div className="tableOfContents-wrapper tableOfContents-wrapper-docs ">
                        <div className="tableOfContents">
                            <ul>
                                <li><Link smooth to="/about#about-q1">What is this?</Link></li>
                                <li><Link smooth to="/about#about-q2">What is an API?</Link></li>
                                <li><Link smooth to="/about#about-q3">How much information is stored here?</Link></li>
                                <li><Link smooth to="/about#about-q4">So who built this?</Link></li>
                                <li><Link smooth to="/about#about-q5">Where did you get all of this data?</Link></li>
                                <li><Link smooth to="/about#about-q6">What's the technology stack?</Link></li>
                                <li><Link smooth to="/about#about-q7">Are there any known bugs?</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h1>
                        About
                    </h1>
                    <h2 id="about-q1">
                        What is this?
                    </h2>
                    <p>
                        This website provides a RESTful, GET-Only API interface to retrieve Pokémon' names in different languages. Using this website, you can learn how to use this API to get data you need.
                    </p>
                    <h2 id="about-q2">
                        What is an API?
                    </h2>
                    <p>
                        An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of Pokémon names in various languages.
                        <br/>
                        <br/>
                        A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks.
                    </p>
                    <h2 id="about-q3">
                        How much information is stored here?
                    </h2>
                    <p>
                        All Pokémon names up to 7th generation.
                    </p>
                    <img src="https://i.kym-cdn.com/photos/images/original/001/150/490/507.jpg" alt=""/>
                    <h2 id="about-q4">
                        So who built this?
                    </h2>
                    <p>
                        This page was created by Jakub Moryc as a part of his learning routine.
                        <br/>
                        <br/>
                        Check out his portfolio as well as his <a href="https://github.com/jakubmoryc" target="_blank" rel="noopener noreferrer">GitHub page</a> for more projects.
                    </p>
                    <h2 id="about-q5">
                        Where did you get all of this data?
                    </h2>
                    <p>
                        I took a few CSV files from <a href="https://github.com/PokeAPI/pokeapi" target="_blank" rel="noopener noreferrer">PokéAPI's GitHub</a> and combined them into one big array of objects (in fact, my other app uses that array on it's client side) and uploaded it to a database.
                    </p>
                    <h2 id="about-q6">
                        What's the technology stack?
                    </h2>
                    <p>
                        This page itself uses React.js and SASS.
                        <br/>
                        <br/>
                        The API was built with Node, Express.js and MongoDB and it uses Atlas as it's database host whilst the app itself is hosted on Heroku.
                    </p>
                    <h2 id="about-q7">
                    Are there any known bugs?
                    </h2>
                    <p>
                        You can't retrieve data if Pokémon's name includes a hyphen (-). For example Type-Null. For these Pokémon, I recommend using their IDs.
                    </p>
                </div>
            </div>
        </div>
    )
}

