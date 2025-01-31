import { ReactNode } from 'react';
import { PathContextProvider } from './path-context-provider';
import { DataContextProvide } from './data-context-provider';

type AppContextProviderProps = {
  children: ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  return (
    <PathContextProvider>
      <DataContextProvide>{children}</DataContextProvide>
    </PathContextProvider>
  );
}
