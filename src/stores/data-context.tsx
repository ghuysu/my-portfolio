import { createContext } from 'react';
import jsonData from '../data.json';

export const DataContext = createContext({ ...jsonData });
