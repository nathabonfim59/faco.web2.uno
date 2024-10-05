import React from 'react';
import "./card.css"

const Cabecalho = () => { };
const Centro = () => { };
const Rodape = () => { };

const Card = () => {
    return (
        <div className="carta">
            <Cabecalho/>
            <Centro/>
            <Rodape/>
        </div>
    )
}

export default Card;