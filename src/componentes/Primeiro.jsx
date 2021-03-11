import React from 'react'

// retornar mais de um elemento adjacente
// sem envolver com nenhum outro componente
// <> ou React.Fragment

// function Primeiro(){
//     return(
//         <div>
//             <h1>Primeiro</h1>
//             <h2>Exemplo de um componente React</h2>
//         </div>
//     )
// }
// export default Primeiro

// export default function(){
//     return(
//         <>
//             <h1>Primeiro Componente</h1>
//             <h2>Exemplo de um componente React</h2>
//         </>
//     )
// }

// export default () => {
//     return(
//         <React.Fragment>
//             <h1>Primeiro Componente (Arrow)</h1>
//             <h2>Exemplo de um componente React</h2>
//         </React.Fragment>
//     )
// }

export default () =>
    <>
        <h1>Primeiro Componente (Arrow)</h1>
        <h2>Exemplo de um componente React</h2>
    </>