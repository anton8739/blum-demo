import { createContext } from 'react';
import { AppContextType, UseFormReturn } from './types';

export const AppContext = createContext<AppContextType>({
  user: null,
  setUser: () => {},
  isAuth: false,
  setIsAuth: () => {},
});
export const LoginFormContext = createContext<UseFormReturn | null>(null);
export const RegistrationFormContext = createContext<UseFormReturn | null>(null);
