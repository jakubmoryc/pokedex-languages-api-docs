import React from 'react'

export default function About({ stickyTableOfContents }) {
    const tableOfContentsClasses = "tableOfContents " + (stickyTableOfContents ? "sticky" : "")

    return (
        <div className="about">
            <div className="pageWrapper">
                <div className="tableOfContents-wrapper">
                    <div className={tableOfContentsClasses}>
                        <ol>
                            <li>What is this?</li>
                            <li>What is an API?</li>
                            <li>How much information is stored here?</li>
                            <li>So who built this?</li>
                            <li>Where did you get all of this data?</li>
                            <li>What's the technology stack?</li>
                            <li>Are there any known bugs?</li>
                        </ol>
                    </div>
                </div>
                <div className="content">
                    <h1>About</h1>
                    <h2>What is this?</h2>
                    <p>This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, types, egg groups and much, much more.</p>
                    <h2>What is an API?</h2>
                    <p>An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of thousands of Pokémon-related objects, and the interfaces are URL links.

A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks.</p>
                    <h2>How much information is stored here?</h2>
                    <p>A lot.

We currently have tens of thousands of individual items in our database, including:</p>
                    <h2>So who built this?</h2>
                    <p>Pokémon V1 was created by Paul Hallett as a weekend project but it quickly became more than a weekend's worth of work. In December of 2014 Paul deprecated V1 in favor of working on V2.

This is where Zane Adickes jumped in. Zane thought the original project was a fantastic idea and wanted to help it grow. With direction from Paul, Zane created the V2 API using an exact mirror of Veekun's data related to the main series of games.</p>
                    <h2>Where did you get all of this data?</h2>
                    <p>Veekun has a fantastic Pokedex which is also an open source project containing a ton of csv data. We used this to flesh out the database that powers Pokeapi.</p>
                    <h2>What's the technology stack?</h2>
                    <p>Up until November 2018, the API and website were built together in a single Python project using the Django framework and paired with a PostgresQL database to store the data. Django REST Framework was used to expose the data through a RESTful API.</p>
                </div>
            </div>
        </div>
    )
}

