import React from 'react';
import { TemaProvider } from './contextos/TemaContexto';
import Header from './componentes/Header';
import PerfilPersonal from './componentes/PerfilPersonal';
import Proyectos from './componentes/Proyectos';
import Habilidades from './componentes/Habilidades';
import FondoAnimado from './componentes/FondoAnimado';
import styles from './estilos/App.module.css';

function App() {
  return (
    <TemaProvider>
      <div className={styles.contenedor} style={{ position: 'relative' }}>
        <div className={styles.principal} style={{ position: 'relative' }}>
          <FondoAnimado />
          <div className={styles.contenedorPrincipal} style={{ position: 'relative', zIndex: 1 }}>
            <Header />
            <PerfilPersonal />
            <Proyectos />
            <Habilidades />
          </div>
        </div>
      </div>
    </TemaProvider>
  );
}

export default App;