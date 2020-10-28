import React from 'react';
import './index.css'

const Emojis = (props) => {
    const { data, onClick } = props
    return (
        <div>
            <ul className="emoji-ul">
            {data.map(emoji => (
            <li className="emoji-li" key={emoji.name}>
                <button className="emoji-btn" onClick={onClick}>
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                </button>
            </li>
            ))}
        </ul>
      </div>
    )
}

export { Emojis }