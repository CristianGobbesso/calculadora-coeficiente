import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }>
          CDE
        </NavLink>

        <nav className="nav" aria-label="Navegación principal">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }>
                Inicio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/paginas" className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }>
                Páginas de interés
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}