import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Portfolio.css';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="portfolio" id="portfolio">
      <div className="contenido-seccion">
        <h2>{t('portfolio.title')}</h2>
        <div className="portfolio-item">
          <img src="img/project1.png" alt="Project 1" />
          <h3>{t('portfolio.projects[0].title')}</h3>
          <p>{t('portfolio.projects[0].description')}</p>
        </div>
        <div className="portfolio-item">
          <img src="img/project2.png" alt="Project 2" />
          <h3>{t('portfolio.projects[1].title')}</h3>
          <p>{t('portfolio.projects[1].description')}</p>
        </div>
        {/* Añade más elementos de portfolio según sea necesario */}
      </div>
    </section>
  );
}

export default Portfolio;
