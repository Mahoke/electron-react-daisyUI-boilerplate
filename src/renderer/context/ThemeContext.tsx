import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextProps {
  theme: ThemeType;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setCurrentTheme: null,
});

export const useTheme = () => useContext(ThemeContext);
