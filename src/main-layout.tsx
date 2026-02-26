import { Link, Outlet } from "react-router";

// MainLayout remains unchanged for consistency in styling
const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Removed particle overlays and heavy gradients for simplicity */}

      <header className="border-b border-neutral-800 backdrop-blur-md bg-black/90 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            Deathcore Hub
          </Link>
          <nav className="flex gap-8">
            <Link
              to="/projects"
              className="text-lg font-medium text-neutral-400 hover:text-purple-300 transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-neutral-400 hover:text-purple-300 transition-colors duration-200"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="relative z-10">
        <Outlet />
      </main>
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500 bg-black">
        © {new Date().getFullYear()} Bogdan — Deathcore Project Hub. Engineered
        for innovation.
      </footer>
    </div>
  );
};

export default MainLayout;
