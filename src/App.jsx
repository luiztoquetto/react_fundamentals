import './App.css'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'
import Parametro from './componentes/basicos/Parametro'
import Filhos from './componentes/basicos/Filhos'
import Card from './componentes/layout/Card'
import Repeticao from './componentes/basicos/Repeticao'
import Condicional from './componentes/basicos/Condicional'
import Condicional2_if from './componentes/basicos/Condicional2_if'
import Pai from './componentes/comunicacao/direta/Pai'
import Super from './componentes/comunicacao/indireta/Super'

export default props =>
    <div className="App">
        <Card titulo="#8 - Comunicação indireta" color="#000">
            <Super></Super>
        </Card>

        <Card titulo="#7 - Comunicação direta" color="#4298B5">
            <Pai sobrenome="Junior"></Pai>
        </Card>

        <Card titulo="#6 - Condicional v2" color="#FA6900">
            <Condicional2_if numero={11}></Condicional2_if>
        </Card>

        <Card titulo="#5 - Condicional v1" color="#E94C6F">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#4 - Repetição" color="#008BBA">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#3 - Componente com parametro" color="#D96459">
            <Parametro titulo="esse é o titulo" subtitulo="esse é o subtitulo"></Parametro>
        </Card>

        <Card titulo="#2 - Componente com filhos" color="#FF85CB">
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

        <Card titulo="#1 - Primeiro Componente" color="#92B06A">
            <Primeiro/>
        </Card>
    </div>