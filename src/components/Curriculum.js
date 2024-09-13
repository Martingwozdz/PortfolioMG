import React from 'react';
import '../styles.css';

function Curriculum() {
  return (
    <section className="curriculum" id="curriculum">
      <div className="contenido-seccion">
        <h2>Curriculum Vitae</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Front-end Developer</h3>
            <span>2018 - 2021</span>
            <p>Descripción del puesto y responsabilidades.</p>
          </div>
          <div className="timeline-item">
            <h3>Web Designer</h3>
            <span>2015 - 2018</span>
            <p>Descripción del puesto y responsabilidades.</p>
          </div>
          {/* Añade más elementos de la línea de tiempo según sea necesario */}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
