import React from 'react';
// componente letterglitch e o countdown
import LetterGlitch from './components/LetterGlitch'; 
import ContagemRegressiva from './ContagemRegressiva';
import './App.css'; 

function App() {
  return (
    <div className="glitch-container">
      {/* O fundo LetterGlitch com os seus comandos */}
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      
      {/* a contagem */}
      <div className="content">
        <ContagemRegressiva />
      </div>
    </div>
  );
}

export default App;