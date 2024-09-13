import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Skills.css';

function Skills() {
  const { t } = useTranslation();

  useEffect(() => {
    const skillsSection = document.querySelector('.skills');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const barrasSkill = entry.target.querySelectorAll('.barra-skill');
          barrasSkill.forEach(barra => {
            const percentage = barra.getAttribute('data-percentage');
            barra.querySelector('.progreso').style.width = percentage;
          });
        }
      });
    }, { threshold: 0.5 }); // Ajusta el umbral según necesites

    observer.observe(skillsSection);

    return () => {
      observer.unobserve(skillsSection);
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>{t('skills.title')}</h2>
        <div className="fila">
          <div className="col">
            <h3>{t('skills.technicalSkills')}</h3>
            <div className="skill">
              <span>{t('skills.javascript')}</span>
              <div className="barra-skill" data-percentage="90%">
                <div className="progreso">
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.htmlCss')}</span>
              <div className="barra-skill" data-percentage="89%">
                <div className="progreso">
                  <span>89%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.postgresql')}</span>
              <div className="barra-skill" data-percentage="75%">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.react')}</span>
              <div className="barra-skill" data-percentage="85%">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.redux')}</span>
              <div className="barra-skill" data-percentage="55%">
                <div className="progreso">
                  <span>55%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h3>{t('skills.professionalSkills')}</h3>
            <div className="skill">
              <span>{t('skills.communication')}</span>
              <div className="barra-skill" data-percentage="80%">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.teamwork')}</span>
              <div className="barra-skill" data-percentage="70%">
                <div className="progreso">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.creativity')}</span>
              <div className="barra-skill" data-percentage="85%">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.adaptability')}</span>
              <div className="barra-skill" data-percentage="90%">
                <div className="progreso">
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>{t('skills.problemSolving')}</span>
              <div className="barra-skill" data-percentage="75%">
                <div className="progreso">
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
