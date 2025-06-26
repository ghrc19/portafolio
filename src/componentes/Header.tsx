import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ToggleTema from './ToggleTema';
import styles from '../estilos/Header.module.css';

const Header: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const navegarA = (elemento: string) => {
    const target = document.getElementById(elemento);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuAbierto(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/portafolio/portafolio.png" alt="icono portafolio" style={{width: 32, height: 32}} />
          <span>console.log("Proyectos en marcha");</span>
        </a>

        <div className={styles.menuContainer}>
          <ul className={styles.menuLista}>
            <li className={styles.menuItem}>
              <a href="#perfil" className={styles.menuEnlace} onClick={(e) => { e.preventDefault(); navegarA('perfil'); }}>
                Perfil
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#proyectos" className={styles.menuEnlace} onClick={(e) => { e.preventDefault(); navegarA('proyectos'); }}>
                Proyectos
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#habilidades" className={styles.menuEnlace} onClick={(e) => { e.preventDefault(); navegarA('habilidades'); }}>
                Habilidades
              </a>
            </li>
          </ul>

          <ToggleTema />

          <button 
            className={styles.menuMovil}
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuAbierto && (
        <div className={styles.menuMovilAbierto}>
          <ul className={styles.menuMovilLista}>
            <li>
              <a href="#perfil" className={styles.menuMovilEnlace} onClick={(e) => { e.preventDefault(); navegarA('perfil'); }}>
                Perfil
              </a>
            </li>
            <li>
              <a href="#proyectos" className={styles.menuMovilEnlace} onClick={(e) => { e.preventDefault(); navegarA('proyectos'); }}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#habilidades" className={styles.menuMovilEnlace} onClick={(e) => { e.preventDefault(); navegarA('habilidades'); }}>
                Habilidades
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;