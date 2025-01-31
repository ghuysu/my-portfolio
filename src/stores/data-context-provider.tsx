import { ReactNode } from 'react';
import { DataContext } from './data-context';
import jsonData from '../data.json';
type DataContextProviderProps = {
  children: ReactNode;
};

export function DataContextProvide({ children }: DataContextProviderProps) {
  return (
    <DataContext.Provider value={{ ...jsonData }}>
      {children}
    </DataContext.Provider>
  );
}
