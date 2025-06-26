import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTema } from '../contextos/TemaContexto';
import styles from '../estilos/ToggleTema.module.css';

const ToggleTema: React.FC = () => {
  const { temaOscuro, alternarTema } = useTema();

  return (
    <button 
      className={styles.toggle}
      onClick={alternarTema}
      aria-label={temaOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className={`${styles.iconoContenedor} ${temaOscuro ? styles.oscuro : styles.claro}`}>
        <Sun className={styles.iconoSol} size={18} />
        <Moon className={styles.iconoLuna} size={18} />
      </div>
    </button>
  );
};

export default ToggleTema;