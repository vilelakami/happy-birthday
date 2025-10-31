import React from 'react';
import Countdown from 'react-countdown';

// função pra atualizar a data de aniversário
const getProximaDataAniversario = () => {
  const hoje = new Date();
  const mesAniversario = 10; // Novembro, pois 0 é janeiro
  const diaAniversario = 1;

  let dataAniversario = new Date(hoje.getFullYear(), mesAniversario, diaAniversario);

  if (hoje.getTime() > dataAniversario.getTime()) {
    dataAniversario = new Date(hoje.getFullYear() + 1, mesAniversario, diaAniversario);
  }
  
  return dataAniversario;
};

const dataAlvo = getProximaDataAniversario();


// função pra criar a contagem regressiva
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  const isBirthdayArrived = completed; 

  if (isBirthdayArrived) {
    return <span className="aniversario-message">FELIZ ANIVERSÁRIO MAMAE!</span>;
  } else {
    return (
      <span className="countdown-text">
        <span className="countdown-value">{days}</span> DIAS, 
        <span className="countdown-value"> {hours}</span> HORAS, 
        <span className="countdown-value"> {minutes}</span> MINUTOS E 
        <span className="countdown-value seconds-value"> {seconds}</span> SEGUNDOS!
      </span>
    );
  }
};

// coutdown do react
const ContagemRegressiva = () => {
  return (
    <Countdown
      date={dataAlvo}
      renderer={renderer}
    />
  );
};

export default ContagemRegressiva;