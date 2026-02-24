import Calculator from "../components/Calculator";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">

      <div className="home__intro">
        <h2>Herramienta rápida para Comercio Exterior</h2>
        <p>
          Calculá el coeficiente de exportación de manera simple y
          consultá enlaces oficiales relacionados al sector.
        </p>

        <Link to="/paginas" className="home__cta">
          Ver páginas oficiales →
        </Link>
      </div>

      <div className="home__container">
        <Calculator />
      </div>

      <div className="home__info">
        <h3>¿Qué es el coeficiente de exportación?</h3>
        <p>
          Es un factor utilizado para ajustar valores en función del
          derecho de exportación aplicable.
        </p>
      </div>

    </section>
  );
}