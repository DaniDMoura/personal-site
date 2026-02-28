import { FC } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

const App: FC = () => {
  return (
    <div className="h-screen overflow-hidden bg-[var(--color-surface-dark)] text-white font-sans antialiased">
      <main className="relative z-10 h-full flex flex-col overflow-hidden">
        <Hero />
        <Footer />
      </main>
      <Analytics />
    </div>
  );
};

export default App;
