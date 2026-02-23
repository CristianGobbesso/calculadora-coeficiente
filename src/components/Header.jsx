import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="logo">
          CDE
        </Link>

        <nav className="nav" aria-label="Navegación principal">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Inicio
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/paginas" className="nav__link">
                Páginas de interés
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}