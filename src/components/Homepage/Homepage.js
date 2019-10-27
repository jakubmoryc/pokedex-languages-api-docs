import React, { Component } from 'react'

import uk from '../../icons/united-kingdom.svg'
import de from '../../icons/germany.svg'
import it from '../../icons/italy.svg'
import es from '../../icons/spain.svg'
import jp from '../../icons/japan.svg'
import kr from '../../icons/south-korea.svg'
import cn from '../../icons/china.svg'
import fr from '../../icons/france.svg'

import {
    Link
  } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="jumbotron">
                    <h1>PokéLANG API</h1>
                    <h2>A RESTful API with Pokémon' names in various languages</h2>
                    <div className="jumbotron-flags">
                        <img src={uk} alt="" className="flag-icon"/>
                        <img src={de} alt="" className="flag-icon"/>
                        <img src={it} alt="" className="flag-icon"/>
                        <img src={es} alt="" className="flag-icon"/>
                        <img src={jp} alt="" className="flag-icon"/>
                        <img src={kr} alt="" className="flag-icon"/>
                        <img src={cn} alt="" className="flag-icon"/>
                        <img src={fr} alt="" className="flag-icon"/>
                    </div>
                </div>
                <hr/>
                <h1>Try it now!</h1>
                <h3>And <Link to="/docs">check out the docs!</Link></h3>
                <div className="demo-box">
                    <div className="input-group">
                        <div class="input-group-prepend">
                            https://pokedex-languages-api.herokuapp.com/
                        </div>
                        <input type="text"/>
                        <button class="input-group-button">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
