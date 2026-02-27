import { Link } from "react-router-dom";
import "./Footer.css";
import ScrollLink from "../Scrool/ScrollLink";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__brand">
                    <h3>CDE</h3>
                    <p>
                        Herramienta digital para cálculo y consulta de recursos
                        relacionados con comercio exterior.
                    </p>
                </div>

                <div className="footer__links">
                    <h4>Secciones</h4>
                    <ul>
                        <li><ScrollLink to="/">Inicio</ScrollLink></li>
                        <li><ScrollLink to="/paginas">Páginas de interés</ScrollLink></li>
                    </ul>
                </div>

                <div className="footer__legal">
                    <h4>Legal</h4>
                    <p>Proyecto educativo sin fines comerciales.</p>
                </div>

                <div className="footer__social">
                    <h4>Contacto</h4>
                    <a
                        href="https://github.com/CristianGobbesso"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>

            </div>

            <div className="footer__bottom">
                © {new Date().getFullYear()} CDE — Desarrollado por Cristian Gobbesso

            </div>
        </footer>
    );
}