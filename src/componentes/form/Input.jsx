import React, {useState} from 'react'

export default (props ) => {
    const [nome, setNome] = useState('Pedro')

    return(
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={evento=>setNome(evento.target.value)} />
        </>
    );
};
