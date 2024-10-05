import React, { useState } from 'react';

const Parabens = function() {
    return <h1>Parabéns!</h1>;
}


const Contador = function () {
    const [pontos, setPontos] = useState(0);

    return (
        <>
            <h1>Contador</h1>
            <p>Pontos {pontos}</p>

            {pontos > 10 && <Parabens />}

            <button onClick={() => setPontos(pontos + 1)}>
                Incrementar
            </button>
        </>
    );
}

export default Contador;