import React from 'react'

export default props => {
    function acao(){
        props.onClick(Math.random(), 'Resultado');
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}