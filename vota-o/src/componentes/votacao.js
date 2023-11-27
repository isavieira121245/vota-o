import React, { useState } from 'react';
import './votacao.css';
 
const Votacao = () => {
  const [votos, setVotos] = useState({
    opcao1: 0,
    opcao2: 0,
    opcao3: 0,
   
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
        <button onClick={() => Voto('opcao1')}>Opção 1</button>
        <button onClick={() => Voto('opcao2')}>Opção 2</button>
        <button onClick={() => Voto('opcao3')}>Opção 3</button>
        {/* Adicione mais botões ou opções de voto conforme necessário */}
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