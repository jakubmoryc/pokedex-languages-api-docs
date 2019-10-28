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
                        <input type="text" placeholder="pokemon/resource"/>
                        <button class="input-group-button">
                            <p>Submit</p>
                        </button>
                        <br/>
                    </div>
                    <p>Try: /pokemon, /roserade, /420, /roserade/es/</p>
                    <h2>Response</h2>
                    <hr/>
                    <div className="demo-box-response">
                        <code>
                        Gfullam has a posted a great answer.

I'll expand it a bit and provide some alternative solutions. Most of these are probably overkill for your particular case. However I believe you (and potential future readers) might find these useful. Note that these require ES6.

Template Literal Expression
Since you already have your code stored in a variable, you could use a Template Literal Expression. This is might be preferable if you have many variables or if you want to control your output.
                        </code>
                    </div>
                </div>
            </div>
        )
    }
}
