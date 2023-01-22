import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface ThemeContextProps {
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

export const defaultState: ThemeContextProps = {
  currentTheme: localStorage.getItem('theme') ?? 'light',
  setCurrentTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultState);

export const useTheme = () => useContext(ThemeContext);
