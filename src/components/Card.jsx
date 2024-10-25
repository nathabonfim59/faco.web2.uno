import React from "react";
import "./card.css";

const Cabecalho = (props) => {
  return (
    <div className="cabecalho">
      <span>{props.nome}</span>
    </div>
  );
};

const Centro = (props) => {
  return (
    <div className="centro">
      <span>{props.nome}</span>
    </div>
  );
};

const Rodape = (props) => {
  return (
    <div className="rodape">
      <span>{props.nome}</span>
    </div>
  );
};

const Card = (props) => {
  // Get color based on first character (R, B, G, Y)
  const getCardColor = () => {
    const colors = {
      'R': '#ff0000',
      'B': '#0000ff',
      'G': '#00aa00',
      'Y': '#ffaa00',
    };
    return colors[props.nome[0]] || '#ff0000';
  };

  const cardStyle = {
    backgroundColor: getCardColor()
  };

  return (
    <div className="carta" style={cardStyle}>
      <Cabecalho nome={props.nome} />
      <Centro nome={props.nome} />
      <Rodape nome={props.nome} />
    </div>
  );
};

export default Card;
