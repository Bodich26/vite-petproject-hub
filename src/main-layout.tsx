import { Outlet } from "react-router";
import { Container } from "./shared";
import { FooterWidget } from "./widgets";
import { HeaderWidget } from "./widgets";

const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen relative">
      <HeaderWidget />
      <main className="relative z-10">
        <Container className="relative flex flex-col items-center py-16 space-y-24">
          <Outlet />
        </Container>
      </main>
      <FooterWidget />
    </div>
  );
};

export default MainLayout;
