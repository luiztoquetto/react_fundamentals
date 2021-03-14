import React from 'react'

export default (props) => {
    return(
        <div>
            <button onClick={props.onIncrementa}>++</button>
            <button onClick={props.onDecrementa}>--</button>
        </div>
    );
};