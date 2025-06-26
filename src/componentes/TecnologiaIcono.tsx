import React from 'react';
import * as Icons from 'lucide-react';
import styles from '../estilos/PerfilPersonal.module.css';

interface TecnologiaIconoProps {
  nombre: string;
  color: string;
  icono: string;
}

const TecnologiaIcono: React.FC<TecnologiaIconoProps> = ({ nombre, color, icono }) => {
  const IconComponent = (Icons as any)[icono] || Icons.Code;
  return (
    <div className={styles.tecnologiaIcono} style={{ backgroundColor: color }} title={nombre}>
      <IconComponent size={22} />
    </div>
  );
};

export default TecnologiaIcono;
