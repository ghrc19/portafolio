import React from 'react';
import TarjetaProyecto from './TarjetaProyecto';
import { proyectos } from '../datos/proyectos';
import styles from '../estilos/Proyectos.module.css';
import stylesApp from '../estilos/App.module.css';

const Proyectos: React.FC = () => {
  return (
    <section id="proyectos" className={`${stylesApp.seccion} ${styles.proyectos}`}>
      <div className={stylesApp.contenido}>
        <h2 className={stylesApp.titulo}>Mis Proyectos</h2>
        <div className={styles.grid}>
          {proyectos.map((proyecto) => (
            <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;