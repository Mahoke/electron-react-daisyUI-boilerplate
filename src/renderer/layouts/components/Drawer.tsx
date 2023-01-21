import { useNavigate } from 'react-router-dom';

type DrawerProps = {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({ drawerOpen, setDrawerOpen }: DrawerProps) {
  const navigate = useNavigate();

  function handleDrawerItemClicked(route: string) {
    setDrawerOpen(false);
    navigate(route);
  }

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
        onClick={() => setDrawerOpen(!drawerOpen)}
      />
      <ul className="p-4 menu w-80 bg-base-100 text-base-content">
        <li>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => handleDrawerItemClicked('/')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => handleDrawerItemClicked('/about')}
          >
            About
          </button>
        </li>
      </ul>
    </div>
  );
}
