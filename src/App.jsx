import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PaginasInteres from "./pages/PaginasInteres";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paginas" element={<PaginasInteres />} />
        </Routes>
      </main>
    </>
  );
}

export default App;