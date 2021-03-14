import './Contador.css'
import React, {Component} from 'react'

import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends Component{
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    incrementa = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementa = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                
                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>

                <Display valor={this.state.valor}></Display>

                <Botoes onIncrementa={this.incrementa} onDecrementa={this.decrementa}></Botoes>
            </div>
        )
    }
}