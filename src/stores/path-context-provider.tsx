import { useState, ReactNode } from 'react';
import { PathContext, PathContextType } from './path-context';

type PathContextProviderProps = {
  children: ReactNode;
};

export function PathContextProvider({ children }: PathContextProviderProps) {
  const [path, setPath] = useState('/');

  const value: PathContextType = {
    path,
    setPath,
  };

  return <PathContext.Provider value={value}>{children}</PathContext.Provider>;
}
