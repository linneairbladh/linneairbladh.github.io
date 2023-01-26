import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { pages } from "./config/pages";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="flex w-full flex-col">
        <img
          className="h-32 object-contain"
          src="/assets/images/logga2.jpg"
          alt="Kongagården logo"
        />
        <div className="h-12 w-full">
          <Navbar navbarItems={pages} />
        </div>
      </header>
      <main className="flex-grow">
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="h-30 w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
