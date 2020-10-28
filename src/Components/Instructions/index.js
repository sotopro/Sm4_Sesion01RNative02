import React, { Component } from 'react';
import './index.css'

class Instructions extends Component {
    render(){
        return (
            <div className="instructions">
                
                <span role="img" aria-label="bomb" id="bomb">💣</span>
                <p>Click on an emoji to view the emoji short name.</p>
            </div>
        )
    }
}


export { Instructions }