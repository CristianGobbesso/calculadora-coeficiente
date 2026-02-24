import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark";
});
useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);
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
        <button
  className="theme-toggle"
  onClick={() => setDarkMode(prev => !prev)}
>
  {darkMode ? "☀️" : "🌙"}
</button>
      </div>
    </header>
  );
}