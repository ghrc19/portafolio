import React, { createContext, useContext, useState, useEffect } from 'react';

interface TemaContextoTipo {
  temaOscuro: boolean;
  alternarTema: () => void;
}

const TemaContexto = createContext<TemaContextoTipo | undefined>(undefined);

export const useTema = () => {
  const contexto = useContext(TemaContexto);
  if (contexto === undefined) {
    throw new Error('useTema debe ser usado dentro de un TemaProvider');
  }
  return contexto;
};

interface TemaProviderProps {
  children: React.ReactNode;
}

export const TemaProvider: React.FC<TemaProviderProps> = ({ children }) => {
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const temaGuardado = localStorage.getItem('tema-oscuro');
    return temaGuardado ? JSON.parse(temaGuardado) : false;
  });

  useEffect(() => {
    localStorage.setItem('tema-oscuro', JSON.stringify(temaOscuro));
    document.documentElement.setAttribute('data-tema', temaOscuro ? 'oscuro' : 'claro');
  }, [temaOscuro]);

  const alternarTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (
    <TemaContexto.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};