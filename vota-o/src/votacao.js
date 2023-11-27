import React, { useState } from 'react';
import './votacao.css';
 
const Votacao = () => {
  const [votos, setVotos] = useState({
    opcao1: 0,
    opcao2: 0,
    opcao3: 0,
  });
 
  const handleVoto = (opcao) => {
    setVotos({
      ...votos,
      [opcao]: votos[opcao] + 1,
    });
  };
 
  return (
    <div className="votacao">
      <h2>Qual seu time favorito?</h2>
      <div className="opcoes">
        <button onClick={() => handleVoto('opcao1')}>Opção 1</button>
        <button onClick={() => handleVoto('opcao2')}>Opção 2</button>
        <button onClick={() => handleVoto('opcao3')}>Opção 3</button>
        
      </div>
      <div className="resultados">
        <h3>Resultados:</h3>
        <p>São Paulo: {votos.opcao1}</p>
        <p>Corinthians: {votos.opcao2}</p>
        <p>Santos: {votos.opcao3}</p>
        {/* Exiba mais resultados conforme necessário */}
      </div>
    </div>
  );
};
 
export default Votacao;