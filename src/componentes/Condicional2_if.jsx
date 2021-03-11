import React from 'react'
import Condicional_if from './Condicional_if'

export default props => {
    return(
        <div>
            <h2>O número é {props.numero}</h2>
            <Condicional_if teste={props.numero % 2 == 0}>
                <span>Par</span>
            </Condicional_if>
            
            <Condicional_if teste={props.numero % 2 == 1}>
                <span>Impar</span>
            </Condicional_if>
        </div>
    )
}