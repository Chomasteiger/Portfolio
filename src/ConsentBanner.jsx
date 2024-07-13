import React, { useState, useEffect } from 'react';
import './index.css'; // Asegúrate de tener tus estilos aquí si son necesarios

const ConsentBanner = ({ onAccept }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Verificar en localStorage si el consentimiento ya fue dado
    const consentAccepted = localStorage.getItem('consentAccepted') === 'true';
    setConsentGiven(consentAccepted);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setConsentGiven(true);
    onAccept(); // Llama a la función onAccept pasada por props desde App.jsx
  };

  const handleDecline = () => {
    // Implementa acciones si el usuario declina el consentimiento (opcional)
    localStorage.removeItem('consentAccepted');
    setConsentGiven(false);
  };

  if (consentGiven) {
    return null; // No mostrar el banner si el consentimiento ya fue dado
  }

  return (
    <div className="consent-banner">
      <p>Este sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario.</p>
      <div className="consent-buttons">
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={handleDecline}>Declinar</button>
      </div>
    </div>
  );
};

export default ConsentBanner;
