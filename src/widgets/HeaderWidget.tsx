import { Link } from "react-router";
import { Container } from "../shared";

export const HeaderWidget = () => {
  return (
    <header className="border-b border-neutral-800 backdrop-blur-md bg-black/90 sticky top-0 z-50">
      <Container>
        <div className="mx-auto py-2 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            <img src="/logo.svg" alt="Logo" />
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
  );
};
