import React from 'react'
import Sub from './Sub'

export default props => {
    function quandoClicar(valorGerado){
        alert('Ação')
        console.log(valorGerado)
    }

    return(
        <div>
            <h4>Valor</h4>
            <Sub onClick={quandoClicar}></Sub>
        </div>
    )
}