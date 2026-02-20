import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">CDE</div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/paginas">Páginas de interés</Link>
      </nav>
    </header>
  );
}