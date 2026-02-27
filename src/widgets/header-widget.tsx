import { Link } from "react-router";
import { Container, mySocial } from "../shared";

export const HeaderWidget = () => {
  return (
    <header className="border-b border-neutral-800 backdrop-blur-md bg-black/90 sticky top-0 z-50">
      <Container>
        <div className="mx-auto py-2 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" width={"130px"} />
          </Link>
          <nav className="flex justify-center gap-5">
            {mySocial.map((link) => (
              <a
                href={link.href}
                target="_blank"
                className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.20]"
              >
                <img className="w-[24px]" src={link.icon} alt={link.name} />
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
