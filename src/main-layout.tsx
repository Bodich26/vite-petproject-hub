import { Link, Outlet } from "react-router";
import { Container } from "./shared";

const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen relative">
      <header className="border-b border-neutral-800 backdrop-blur-md bg-black/90 sticky top-0 z-50">
        <Container>
          <div className="mx-auto py-5 flex justify-between items-center">
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              Project Hub
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
        </Container>
      </header>
      <main className="relative z-10">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500 bg-black">
        © {new Date().getFullYear()} Bodich — Resume & Portfolio. My pet-project
        hub.
      </footer>
    </div>
  );
};

export default MainLayout;
