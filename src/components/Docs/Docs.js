import React from 'react'

export default function Docs() {

    return (
        <div className="about">
            <div className="pageWrapper">
                <div className="tableOfContents-wrapper">
                    <div className="tableOfContents">
                        <ul>
                            <h2>Pokémon</h2>
                            <li><a href="#path1">GET /pokemon/</a></li>
                            <li><a href="#path2">{"GET /pokemon/{pokemon_id}"}</a></li>
                            <li><a href="#path3">{"GET /pokemon/{pokemon_name}"}</a></li>
                            <li><a href="#path4">{"GET /pokemon/{pokemon_id}/{language}"}</a></li>
                            <li><a href="#path5">{"GET /pokemon/{pokemon_name}/{language}"}</a></li>
                            <h2>Other</h2>
                            <li><a href="#path6">GET /</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <h1 className="big-header">Available routes</h1>
                    <div className="path">
                        <h2><span className="path-get-span">GET</span> /pokemon/</h2>
                        <p>Fetch data with all Pokémon</p>
                        <div className="path-parameters">
                            <h3 className="parameters-header">
                                <p>Parameters</p>
                            </h3>
                            <ul>
                                <li>limit - number of Pokémon to limit <span className="path-type-span">integer</span></li>
                                <li>page - pagination string <span className="path-type-span">integer</span></li>
                            </ul>
                        </div>
                        <div className="path-sample">
                            <h3 className="parameters-header">
                                <p>Sample Result</p>
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
