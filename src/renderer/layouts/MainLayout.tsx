/* eslint-disable jsx-a11y/label-has-associated-control */
import { SetStateAction, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Drawer from './components/Drawer';
import Header from './components/Header';

export default function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      <div className="drawer" style={{ height: 'calc(100vh - 4rem)' }}>
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
        />

        <div className="drawer-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </div>
    </div>
  );
}
