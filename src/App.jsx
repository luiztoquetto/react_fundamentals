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
import Input from './componentes/form/Input'
import Contador from './componentes/contador/Contador'
import Mega from './componentes/mega/Mega'

export default props =>
    <div className="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">

            <Card titulo="#11 - Mega" color="#73503C">
                <Mega qtdeNumero={15}></Mega>
            </Card>

            <Card titulo="#10 - Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#9 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>

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
    </div>