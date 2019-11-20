import React from 'react'

import github from '../../icons/github-logo.svg'

export default function GitHubButton() {
    return (
            <a  className="github-button"  
                href="https://github.com/jakubmoryc/pokedex-languages-api-docs" 
                target="_blank" rel="noopener noreferrer" 
                title="See code on GitHub"
            >
                <div>
                    <img src={github}alt=""></img>
                </div>
            </a>
    )
}
