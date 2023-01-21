import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { pages } from "./config/pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="w-full flex flex-col">
        <img
          className="h-32 object-contain"
          src="/assets/images/logga2.jpg"
          alt="Kongagården logo"
        />
        <div className="w-full h-12">
          <Navbar navbarItems={pages} />
        </div>
      </header>
      <main className="flex-grow">
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} />
          ))}

          <Route path="*" />
        </Routes>
      </main>
      <footer className="w-full h-30">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
