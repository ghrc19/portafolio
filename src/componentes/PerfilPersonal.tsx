import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Users, Star, GitFork, Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import TecnologiaIcono from './TecnologiaIcono';
import HabilidadesTecnologia from './HabilidadesTecnologia';
import styles from '../estilos/PerfilPersonal.module.css';
import stylesApp from '../estilos/App.module.css';

const GITHUB_USER = 'ghrc19';

const eventIcons: Record<string, JSX.Element> = {
  PushEvent: <Star size={16} />,
  CreateEvent: <GitFork size={16} />,
  ForkEvent: <GitFork size={16} />,
  WatchEvent: <Star size={16} />,
  PublicEvent: <Star size={16} />,
};

const eventLabels: Record<string, string> = {
  PushEvent: 'Nuevo commit',
  CreateEvent: 'Nuevo repositorio',
  ForkEvent: 'Hizo fork',
  WatchEvent: 'Dio estrella',
  PublicEvent: 'Repositorio hecho público',
};

const PerfilPersonal: React.FC = () => {
  const [eventos, setEventos] = useState<any[]>([]);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/events`)
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(() => setEventos([]));
  }, []);

  const eventosMostrados = verMas ? eventos.slice(0, 10) : eventos.slice(0, 4);

  return (
    <section id="perfil" className={`${stylesApp.seccion} ${styles.perfil}`}>
      <div className={stylesApp.contenido}>
        <div className={styles.contenedor} style={{ position: 'relative' }}>
          <div className={styles.tarjetaPerfil}>
            <div className={styles.avatarSeccion}>
              <div className={styles.avatarContenedor}>
                <img 
                  src="/portafolio/foto.png" 
                  alt="Foto de perfil"
                  className={styles.avatar}
                />
                <div className={styles.estadoOnline}></div>
              </div>
              <div className={styles.infoBasica}>
                <h1 className={styles.nombre}>
                  Guiancarlo Hans Ramos Contreras
                </h1>
                <p className={styles.usuario}>@ghrc19</p>
                <p className={styles.bio}>
                  Soy un programador apasionado creando sistemas web y móviles, tanto personales como de pequeños negocios. Actualmente cuento con poca experiencia trabajando en entornos reales y utilizando metodologías ágiles, pero con todas las ganas de aprender y especializarme tanto como Frontend y Backend.
                </p>
              </div>
            </div>

            <div className={styles.informacionContacto}>
              <div className={styles.contactoItem}>
                <MapPin size={18} />
                <span>Huancayo, Perú</span>
              </div>
              <div className={styles.contactoItem}>
                <Mail size={18} />
                <span>guianramos124@gmail.com</span>
              </div>
              <div className={styles.contactoItem}>
                <Phone size={18} />
                <a target="_blank" rel="noopener noreferrer">
                  +51 951014357
                </a>
              </div>
              <div className={styles.contactoItem}>
                <Calendar size={18} />
                <span>Se unió en setiembre 2024</span>
              </div>
            </div>

            <div className={styles.redesSociales}>
              <a href="https://github.com/ghrc19" className={styles.redSocial} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/guiancarlo-hans-ramos-contreras-866594254/" className={styles.redSocial} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/Kez477731443378" className={styles.redSocial} target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <div className={styles.contenidoPrincipal}>
            <div className={styles.seccionActividad}>
              <h2 className={styles.tituloSeccion}>Actividad Reciente</h2>
              <div className={styles.actividadLista}>
                {eventosMostrados.length === 0 && <div>No hay actividad reciente.</div>}
                {eventosMostrados.map((ev, i) => (
                  <div className={styles.actividadItem} key={ev.id || i}>
                    <div className={styles.actividadIcono}>
                      {eventIcons[ev.type] || <Star size={16} />}
                    </div>
                    <div className={styles.actividadContenido}>
                      <p>
                        {eventLabels[ev.type] || ev.type}{' '}
                        {ev.repo && <strong>{ev.repo.name}</strong>}
                      </p>
                      <span className={styles.actividadTiempo}>{new Date(ev.created_at).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              {eventos.length > 4 && (
                <button onClick={() => setVerMas(v => !v)} className={styles.verMasBtn}>
                  {verMas ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>

            <div className={styles.seccionHabilidades}>
              <h2 className={styles.tituloSeccion}>Tecnologías Principales</h2>
              <div className={styles.habilidadesGrid}>
                <div className={styles.habilidadItem}>
                  <span className={styles.habilidadNombre}>
                    <TecnologiaIcono nombre="JavaScript" color="#f7df1e" icono="Code" /> JavaScript
                  </span>
                  <div className={styles.habilidadEnmarcada}>
                    <HabilidadesTecnologia color="#f7df1e" habilidades={["ES6+", "DOM", "Fetch API", "Promesas", "Manipulación de Arrays", "Eventos", "Funciones Flecha", "Desestructuración"]} />
                  </div>
                </div>
                <div className={styles.habilidadItem}>
                  <span className={styles.habilidadNombre}>
                    <TecnologiaIcono nombre="TypeScript" color="#3178c6" icono="FileCode" /> TypeScript
                  </span>
                  <div className={styles.habilidadEnmarcada}>
                    <HabilidadesTecnologia color="#3178c6" habilidades={["Tipos Básicos", "Interfaces", "Generics", "Type Guards", "Union Types", "Enums", "Type Aliases"]} />
                  </div>
                </div>
                <div className={styles.habilidadItem}>
                  <span className={styles.habilidadNombre}>
                    <TecnologiaIcono nombre="React" color="#61dafb" icono="Atom" /> React
                  </span>
                  <div className={styles.habilidadEnmarcada}>
                    <HabilidadesTecnologia color="#61dafb" habilidades={["Hooks", "useState", "useEffect", "Props", "Componentes Funcionales", "JSX", "Context API", "React Router"]} />
                  </div>
                </div>
                <div className={styles.habilidadItem}>
                  <span className={styles.habilidadNombre}>
                    <TecnologiaIcono nombre="Node.js" color="#3c873a" icono="Server" /> Node.js
                  </span>
                  <div className={styles.habilidadEnmarcada}>
                    <HabilidadesTecnologia color="#3c873a" habilidades={["Express", "APIs REST", "Manejo de Rutas", "Middlewares", "JWT", "Mongoose", "Socket.io", "File System"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfilPersonal;