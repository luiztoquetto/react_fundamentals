import './App.css'
import React from 'react'

import Primeiro from './componentes/Primeiro'
import Parametro from './componentes/Parametro'
import Filhos from './componentes/Filhos'
import Card from './componentes/layout/Card'
import Repeticao from './componentes/Repeticao'
import Condicional from './componentes/Condicional'
import Condicional2_if from './componentes/Condicional2_if'

export default (props) => (
    <div className="App">
        <Card titulo="#6 - Condicional v2">
            <Condicional2_if numero={11}></Condicional2_if>
        </Card>

        <Card titulo="#5 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#4 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#3 - Componente com parametro">
            <Parametro titulo="esse é o titulo" subtitulo="esse é o subtitulo"></Parametro>
        </Card>

        <Card titulo="#2 - Componente com filhos">
            <Filhos>
                <ul>
                    <li>Leo de marte</li>
                    <li>Leleo</li>
                    <li>Panda</li>
                    <li>Gaton</li>
                    <li>Pato</li>
                </ul>
            </Filhos>
        </Card>

        <Card titulo="#1 - Primeiro Componente">
            <Primeiro/>
        </Card>
    </div>
);