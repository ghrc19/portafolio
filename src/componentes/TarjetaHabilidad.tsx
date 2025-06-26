import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Habilidad } from '../tipos';
import styles from '../estilos/Habilidades.module.css';

interface TarjetaHabilidadProps {
  habilidad: Habilidad;
}

const TarjetaHabilidad: React.FC<TarjetaHabilidadProps> = ({ habilidad }) => {
  const [porcentajeAnimado, setPorcentajeAnimado] = useState(0);
  const [visible, setVisible] = useState(false);

  const IconComponent = (Icons as any)[habilidad.icono] || Icons.Code;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          animarPorcentaje();
        }
      },
      { threshold: 0.5 }
    );

    const elemento = document.getElementById(`habilidad-${habilidad.nombre}`);
    if (elemento) {
      observer.observe(elemento);
    }

    return () => observer.disconnect();
  }, [visible, habilidad.nombre]);

  const animarPorcentaje = () => {
    let contador = 0;
    const intervalo = setInterval(() => {
      contador += 2;
      setPorcentajeAnimado(contador);
      if (contador >= habilidad.porcentaje) {
        clearInterval(intervalo);
        setPorcentajeAnimado(habilidad.porcentaje);
      }
    }, 20);
  };

  return (
    <div 
      id={`habilidad-${habilidad.nombre}`}
      className={styles.habilidad}
    >
      <div className={styles.icono}>
        <IconComponent size={24} />
      </div>
      <h3 className={styles.nombre}>{habilidad.nombre}</h3>
      <div className={styles.barraProgreso}>
        <div 
          className={styles.progreso}
          style={{ width: `${porcentajeAnimado}%` }}
        />
      </div>
      <span className={styles.porcentaje}>{porcentajeAnimado}%</span>
    </div>
  );
};

export default TarjetaHabilidad;