import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ drawerOpen, setDrawerOpen }: HeaderProps) {
  const navigate = useNavigate();

  function navigateHome() {
    setDrawerOpen(false);
    navigate('/');
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          type="button"
          className="btn btn-square btn-ghost"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <button
          type="button"
          className="text-xl normal-case btn btn-ghost"
          onClick={navigateHome}
        >
          My App
        </button>
      </div>
    </div>
  );
}
