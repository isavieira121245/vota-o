import React, { useState } from 'react';
import './votacao.css';
 
const Votacao = () => {
  const [votos, setVotos] = useState({
    SãoPaulo: 0,
    Corinthians: 0,
    Santos: 0,
    Palmeiras: 0,
  });
 
  const Voto = (opcao) => {
    setVotos({
      ...votos,
      [opcao]: votos[opcao] + 1,
    });
  };
 
  return (
    <div className="votacao">
      <h2>Qual seu time favorito?</h2>
      <div className="opcoes">
        <button onClick={() => Voto('SãoPaulo')}>São Paulo</button>
        <button onClick={() => Voto('Corinthians')}>Corinthians</button>
        <button onClick={() => Voto('Santos')}>Santos</button>
        <button onClick={() => Voto('Palmeiras')}>Palmeiras</button>
      </div>
      <div className="resultados">
        <h3>Resultados:</h3>
        <p>São Paulo: {votos.SãoPaulo}</p>
        <p>Corinthians:{votos.Corinthians}</p>
        <p>Santos: {votos.Santos}</p>
        <p>Palmeiras: {votos.Palmeiras}</p>
       
      </div>
    </div>
  );
};
 
export default Votacao;