import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuVisible(false); // Oculta el menú cuando se cambia el idioma
  };

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#inicio">TINCHO</a>
        </div>
        <nav id="nav" className={menuVisible ? 'visible' : ''}>
          <ul>
            <li><a href="#sobremi">{t('navbar.about')}</a></li>
            <li><a href="#skills">{t('navbar.skills')}</a></li>
            <li><a href="#portfolio">{t('navbar.projects')}</a></li>
            <li><a href="#contacto">{t('navbar.contact')}</a></li>
            <li>
              <button onClick={() => changeLanguage('en')}>🇬🇧</button>
            </li>
            <li>
              <button onClick={() => changeLanguage('es')}>🇦🇷 </button>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
