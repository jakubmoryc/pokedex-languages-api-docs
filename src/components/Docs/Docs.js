import React from 'react'

export default function Docs() {

    return (
        <div className="docs">
            <div className="pageWrapper page-docs">
                <div className="tableOfContents-wrapper tableOfContents-wrapper-docs ">
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
                <div className="content content-docs">
                    <h1 className="big-header">Pokémon Routes</h1>

                    <div className="path">
                        <h2><span className="path-get-span">GET</span> /pokemon/</h2>
                        <p>Fetch data with all Pokémon or search many Pokémon using a string.</p>
                        <div className="path-parameters">
                            <h3 className="parameters-header">
                                <p>Query Parameters</p>
                            </h3>
                            <ul>
                                <li>limit - Number of Pokémon to limit. Default - 20. <span className="path-type-span">integer</span></li>
                                <li>page - Pagination. Default - 0. <span className="path-type-span">integer</span></li>
                                <br></br>
                                <li>search - Optional. If present - search Pokémon English names with a given string. Case insensitive. Hypens (-) are not supported and spaces should be encoded as '%20'. <span className="path-type-span">string</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="path">
                        <h2><span className="path-get-span">GET</span> {"pokemon/{pokemon_id}"}</h2>
                        <p>Fetch specific Pokémon data by its ID.</p>
                        <div className="path-parameters">
                            <h3 className="parameters-header">
                                <p>Path Parameters</p>
                            </h3>
                            <ul>
                                <li>pokemon_id - Pokémon's ID. Max 3 digits. <span className="path-type-span">integer</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="path">
                        <h2><span className="path-get-span">GET</span> {"pokemon/{pokemon_name}"}</h2>
                        <p>Fetch specific Pokémon data by its English name.</p>
                        <div className="path-parameters">
                            <h3 className="parameters-header">
                                <p>Path Parameters</p>
                            </h3>
                            <ul>
                                <li>pokemon_name - Pokémon's name in English. Case insensitive. Doesn't support hyphens (-) and spaces should be encoded as '%20'. <span className="path-type-span">string</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="path">
                        <h2><span className="path-get-span">GET</span> {"pokemon/{pokemon_id}/{language}"}</h2>
                        <p>Fetch Pokémon's name in specified language or it's sprite/ID/name.</p>
                        <div className="path-parameters">
                            <h3 className="parameters-header">
                                <p>Path Parameters</p>
                            </h3>
                            <ul>
                                <li>pokemon_id - Pokémon's ID. Max 3 digits. <span className="path-type-span">integer</span> <span className="path-required-span">required</span></li>
                                <li>language - Language to fetch or other subresource (sprite/id): <span className="path-type-span">string</span>
                                    <ul>
                                        <li>us - English</li>
                                        <li>de - German</li>
                                        <li>fr - French</li>
                                        <li>it - Italian</li>
                                        <li>es - Spanish</li>
                                        <li>jp - Japanese</li>
                                        <li>kr - Korean</li>
                                        <li>cn - Traditional Chinese</li>
                                        <li>jp - Japanese</li>
                                        <li>sprite - URL to Pokémon's sprite</li>
                                        <li>id - Pokémon's ID</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="path">
                        <h2><span className="path-get-span">GET</span> {"pokemon/{pokemon_name}/{language}"}</h2>
                        <p>Fetch Pokémon's name in specified language or it's sprite/ID/name.</p>
                        <div className="path-parameters">
                            <h3 className="parameters-header">
                                <p>Path Parameters</p>
                            </h3>
                            <ul>
                                <li>pokemon_name - Pokémon's name in English. Case insensitive. Doesn't support hyphens (-) and spaces should be encoded as '%20'. <span className="path-type-span">integer</span> <span className="path-required-span">required</span></li>
                                <li>language - Language to fetch or other subresource (sprite/id): <span className="path-type-span">string</span>
                                    <ul>
                                        <li>us - English</li>
                                        <li>de - German</li>
                                        <li>fr - French</li>
                                        <li>it - Italian</li>
                                        <li>es - Spanish</li>
                                        <li>jp - Japanese</li>
                                        <li>kr - Korean</li>
                                        <li>cn - Traditional Chinese</li>
                                        <li>jp - Japanese</li>
                                        <li>sprite - URL to Pokémon's sprite</li>
                                        <li>id - Pokémon's ID</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h1 className="big-header">Other Routes</h1>

                    <div className="path">
                        <h2><span className="path-get-span">GET</span> /</h2>
                        <p>Fetch API's version and link to GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
