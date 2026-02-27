import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PaginasInteres from "./pages/PaginasInteres";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scrool/ScrollToTop";

function App() {
  return (
    <>
      <Header />
       <ScrollToTop />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paginas" element={<PaginasInteres />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;