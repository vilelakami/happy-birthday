import React from 'react';
import Countdown from 'react-countdown';

// --- Função auxiliar para verificar se é o dia do aniversário ---
const isBirthdayToday = () => {
    const hoje = new Date();
    // Use o fuso horário local para a checagem
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth(); // 10 é Novembro

    // Se o dia atual for 1 E o mês atual for Novembro
    return diaAtual === 1 && mesAtual === 10;
};
// -----------------------------------------------------------------


// --- Lógica original (ajustada para ignorar a hora de hoje) ---
const getProximaDataAniversario = () => {
    const hoje = new Date();
    const mesAniversario = 10; 
    const diaAniversario = 1;

    let proximaData;

    // Se HOJE é o dia do aniversário (01/11), a próxima data é NO PRÓXIMO ANO.
    if (isBirthdayToday()) {
        proximaData = new Date(hoje.getFullYear() + 1, mesAniversario, diaAniversario);
    } else {
        // Se ainda não é, calcula a data deste ano.
        proximaData = new Date(hoje.getFullYear(), mesAniversario, diaAniversario);
        
        // Se a data já passou (ex: hoje é 02/11), avança para o próximo ano.
        if (hoje.getTime() > proximaData.getTime()) {
            proximaData = new Date(hoje.getFullYear() + 1, mesAniversario, diaAniversario);
        }
    }
    
    // Configura o alvo para 00:00 do dia do aniversário (do ano que vem se for hoje)
    proximaData.setHours(0, 0, 0, 0); 
    
    return proximaData;
};
// -----------------------------------------------------------------

const dataAlvo = getProximaDataAniversario();


/// --- FUNÇÃO RENDERER ATUALIZADA ---
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    
    // 1. CHECAGEM CRUCIAL: A mensagem de parabéns dura o dia todo
    if (isBirthdayToday()) {
        // Usa o TextType (digitação) para a mensagem
        return (
            <TextType 
                text="FELIZ ANIVERSÁRIO MAMAE!" 
                className="aniversario-message" 
                typingSpeed={100} 
                delay={500} 
            />
        );
    }
    
    // 2. Se não for o dia de hoje, exibe a contagem normal
    if (completed) {
        // Se a lógica acima for bem-sucedida, este bloco só rodará no próximo ano,
        // mas é um bom fallback.
        return <span className="aniversario-message">FELIZ ANIVERSÁRIO MAMAE!</span>;
    } else {
        // Modo Contagem Regressiva Detalhada
        return (
            <span className="countdown-text">
                FALTAM: 
                <span className="countdown-value">{days}</span> DIAS, 
                {/* ... restante das horas, minutos e segundos ... */}
                <span className="countdown-value">{hours}</span> HORAS, 
                <span className="countdown-value">{minutes}</span> MINUTOS E 
                <span className="countdown-value seconds-value">{seconds}</span> SEGUNDOS!
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