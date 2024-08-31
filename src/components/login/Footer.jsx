import './footer.css';
import { useState } from 'react';

export function Footer() {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <div className='footer-container'>
      <p className="footer-number">Dúvidas? Ligue 0800 591 2876</p>

      <ul className="footer-list-link">
        <a className="footer-link"href="#">Perguntas frequentes</a>
        <a className="footer-link"href="#">Central de Ajuda</a>
        <a className="footer-link"href="#">Termos de Uso</a>
        <a className="footer-link"href="#">Privacidade</a>
        <a className="footer-link"href="#">Preferências de cookies</a>
        <a className="footer-link"href="#">Informações corporativas</a>
      </ul>

      <div className="footer-language">
        <button className="footer-language-button" onClick={toggleLanguageMenu}>Português</button>
        {showLanguages && (
            <ul className="footer-language-options">
              <li>Português</li>
              <li>English</li>
            </ul>
          )}
      </div>
    </div>
  )
}