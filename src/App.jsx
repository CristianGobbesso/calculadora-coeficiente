import Calculator from "./components/Calculator";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PaginasInteres from "./pages/PaginasInteres";

function App() {


  return (
    <main className="app">
      <section className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/paginas" element={<PaginasInteres/>} />
    
    </Routes>
    </section>
    </main>
  )
}

export default App
