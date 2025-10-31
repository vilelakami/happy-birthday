import React, { useEffect, useRef, useState } from 'react';
import './LetterGlitch.css'; 

const characters = 'PABLLOVITTARNPMVPM111NTDBT1BT2OPENBAR!@#$%&*()-_+=/[]{};:<>.,0123456789';

const LetterGlitch = ({
  glitchSpeed = 50,
  centerVignette = true,
  outerVignette = false,
  smooth = true,
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc']
}) => {
  const containerRef = useRef(null);
  const [cells, setCells] = useState([]);

  // Lógica principal para preencher o fundo com caracteres
  useEffect(() => {
    const generateGrid = () => {
      if (!containerRef.current) return;

      const { offsetWidth, offsetHeight } = containerRef.current;
      const cellSize = 15; // Tamanho em pixels de cada célula/caractere
      const cols = Math.floor(offsetWidth / cellSize);
      const rows = Math.floor(offsetHeight / cellSize);
      const totalCells = cols * rows;

      // Cria um array de objetos para representar cada célula
      const newCells = Array.from({ length: totalCells }, () => ({
        char: characters[Math.floor(Math.random() * characters.length)],
        color: glitchColors[Math.floor(Math.random() * glitchColors.length)],
        delay: Math.random() * 5,
      }));
      
      setCells(newCells);
    };

    generateGrid();
    window.addEventListener('resize', generateGrid);

    // Efeito de glitch: troca os caracteres em um intervalo
    const glitchInterval = setInterval(() => {
      setCells(prevCells => 
        prevCells.map(cell => ({
          ...cell,
          char: characters[Math.floor(Math.random() * characters.length)],
        }))
      );
    }, 1000 / (glitchSpeed / 10)); // Baseado na velocidade

    return () => {
      window.removeEventListener('resize', generateGrid);
      clearInterval(glitchInterval);
    };
  }, [glitchSpeed, glitchColors]);

  return (
    <div 
      ref={containerRef} 
      className={`letter-glitch ${centerVignette ? 'center-vignette' : ''} ${outerVignette ? 'outer-vignette' : ''} ${smooth ? 'smooth-glitch' : ''}`}
    >
      {cells.map((cell, index) => (
        <span 
          key={index} 
          style={{ color: cell.color, animationDelay: `${cell.delay}s` }}
        >
          {cell.char}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitch;