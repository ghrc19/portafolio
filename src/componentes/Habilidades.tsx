import React, { useState } from 'react';
import { habilidades } from '../datos/habilidades';
import { proyectos } from '../datos/proyectos';
import styles from '../estilos/Habilidades.module.css';
import stylesApp from '../estilos/App.module.css';

const logos: Record<string, string> = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Tailwind CSS': 'https://www.svgrepo.com/show/374118/tailwind.svg',
};

const Habilidades: React.FC = () => {
  const [verMas, setVerMas] = useState<Record<string, boolean>>({});

  return (
    <section id="habilidades" className={`${stylesApp.seccion} ${styles.habilidades}`}>
      <div className={stylesApp.contenido}>
        <h2 className={stylesApp.titulo}>Habilidades Técnicas</h2>
        <div className={styles.grid}>
          {habilidades.map((habilidad) => {
            const proyectosUsados = proyectos.filter(p => p.tecnologias.some(t => t.toLowerCase().includes(habilidad.nombre.toLowerCase())));
            const mostrarTodos = verMas[habilidad.nombre];
            const proyectosMostrados = mostrarTodos ? proyectosUsados : proyectosUsados.slice(0, 5);
            return (
              <div key={habilidad.nombre} className={styles.habilidad}>
                <img src={logos[habilidad.nombre]} alt={habilidad.nombre} className={styles.icono} style={{width: 48, height: 48, marginBottom: 16}} />
                <h3 className={styles.nombre}>{habilidad.nombre}</h3>
                <div className={styles.proyectosUsados}>
                  <span className={styles.cantidadProyectos}>
                    Proyectos Aplicados:
                    <span className="cantidad">{proyectosUsados.length}</span>
                  </span>
                  <div className={styles.divisorProyectos}></div>
                  <ul className={styles.listaProyectos}>
                    {proyectosMostrados.map(p => (
                      <li key={p.id}>{p.titulo}</li>
                    ))}
                  </ul>
                  {proyectosUsados.length > 5 && (
                    <button
                      className={styles.verMasBtn}
                      onClick={() => setVerMas(v => ({ ...v, [habilidad.nombre]: !v[habilidad.nombre] }))}
                    >
                      {mostrarTodos ? 'Ver menos' : 'Ver más'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;