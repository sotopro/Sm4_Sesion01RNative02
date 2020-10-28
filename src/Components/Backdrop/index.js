import React from 'react';
import './index.css'

const Backdrop = (props) => {
    const { visible, clicked} = props;
    return visible ? (
        <div className="backdrop" onClick={clicked}></div>
    ) : null;
}

export { Backdrop }