import React, { useState } from 'react';
import './votacao.css';
 
const Votacao = () => {
  const [votos, setVotos] = useState({
    SãoPaulo: 0,
    Corinthians: 0,
    Santos: 0,
   
  });
 
  const Voto = (opcao) => {
    setVotos({
      ...votos,
      [opcao]: votos[opcao] + 1,
    });
  };
 
  return (
    <div className="votacao">
      <h2>Qual seu sabor de sorvete favorito?</h2>
      <div className="opcoes">
        <button onClick={() => Voto('SãoPaulo')}>São Paulo</button>
        <button onClick={() => Voto('Corinthians')}>Corinthians</button>
        <button onClick={() => Voto('Santos')}>Santos</button>
       
      </div>
      <div className="resultados">
        <h3>Resultados:</h3>
        <p>Opção 1: {votos.opcao1}</p>
        <p>Opção 2: {votos.opcao2}</p>
        <p>Opção 3: {votos.opcao3}</p>
        {/* Exiba mais resultados conforme necessário */}
      </div>
    </div>
  );
};
 
export default Votacao;