import React, { Component } from 'react'

import uk from '../../icons/united-kingdom.svg'
import de from '../../icons/germany.svg'
import it from '../../icons/italy.svg'
import es from '../../icons/spain.svg'
import jp from '../../icons/japan.svg'
import kr from '../../icons/south-korea.svg'
import cn from '../../icons/china.svg'
import fr from '../../icons/france.svg'

import signIn from '../../icons/sign-in.svg'

import {
    Link
  } from "react-router-dom";

export default class Homepage extends Component {
    state = {
        result: "No results yet",
        inputValue: ""
    }

    fetchResults = () => {
        const link = "https://pokedex-languages-api.herokuapp.com/" + this.state.inputValue
        fetch(link)
            .then(res => {
                if(res.status !== 200) {
                    res.json()
                        .then(data => {
                            this.setState({
                                result: "Error: " + res.status.toString() + " - " + JSON.stringify(data.msg)
                            })
                        })
                } else {
                    res.json()
                        .then(data => {
                            this.setState({
                                result: JSON.stringify(data, null, 2)
                            })
                        })
                }
            })
            .catch((err) => {
                this.setState({
                    result: "Failed to fetch. Service may be unavailable (503 Status Code)"
                })
            })
    }

    handleInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.fetchResults()
    }

    handleLinkClick = url => e => {
        e.preventDefault()
        this.setState({
            inputValue: url
        })
        this.handleSubmit()
    };


    render() {
        return (
            <div className="homepage">
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
                <h1>Try it now!</h1>
                <h3>And <Link to="/docs">check out the docs!</Link></h3>
                <div className="demo-box">
                    <div className="input-group">
                        <div class="input-group-prepend">
                            <a 
                                href="https://pokedex-languages-api.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {this.props.screenWidth > 599 // Shorten the prepend if on mobile
                                    ? (
                                        "https://pokedex-languages-api.herokuapp.com/"
                                    )
                                    :
                                        ".../"
                                }
                            </a>
                        </div>
                        <input
                            type="text" 
                            placeholder="pokemon/resource"
                            value={this.state.inputValue}
                            onChange={this.handleInput}
                        />
                        <button 
                            class="input-group-button"
                            onClick={this.handleSubmit}
                        >
                            <img src={signIn} alt=""></img>
                        </button>
                        <br/>
                    </div>
                    <p>Try: <a href="#" onClick={this.handleLinkClick("pokemon")}>/pokemon </a>, <a href="#" onClick={this.handleLinkClick("pokemon/roserade")}>pokemon/roserade</a>, <a href="#" onClick={this.handleLinkClick("pokemon/420")}>pokemon/420</a>, <a href="#" onClick={this.handleLinkClick("pokemon/roserade/fr")}>pokemon/roserade/fr</a>
                    </p>
                    <h2>Response</h2>
                    <div className="demo-box-result">
                        <pre>
                            <code class="language-json">
                                {this.state.result}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}
