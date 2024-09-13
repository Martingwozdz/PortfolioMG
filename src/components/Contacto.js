import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contacto.css';

function Contacto() {
  const { t } = useTranslation();

  return (
    <section className="contacto" id="contacto">
      <div className="contenido-seccion">
        <h2>{t('contact.title')}</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">{t('contact.send')}</button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
