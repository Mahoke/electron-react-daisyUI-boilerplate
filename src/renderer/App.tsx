import { useEffect, useState } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import './App.css';
import { defaultState, ThemeContext } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<string>(
    defaultState.currentTheme
  );

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <Router>
      <ThemeContext.Provider
        value={{
          currentTheme,
          setCurrentTheme,
        }}
      >
        <MainLayout />
      </ThemeContext.Provider>
    </Router>
  );
}
