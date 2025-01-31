import { createContext, Dispatch, SetStateAction } from 'react';

export type PathContextType = {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
};

export const PathContext = createContext<PathContextType>({
  path: '/',
  setPath: () => {},
});
