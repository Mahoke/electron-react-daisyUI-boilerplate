import { useState } from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import { ThemeContext, ThemeType } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark');

  return (
    <Router>
      <ThemeContext.Provider
        value={{
          theme: currentTheme,
          setCurrentTheme,
        }}
      >
        <MainLayout />
      </ThemeContext.Provider>
    </Router>
  );
}
