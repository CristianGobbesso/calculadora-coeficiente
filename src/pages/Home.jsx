import Calculator from "../components/Calculator";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">

      <div className="home__intro">
        <h1>Herramienta rápida para Comercio Exterior</h1>
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

      <article className="home__info">
        <h2>¿Qué es el coeficiente de exportación?</h2>
        <p>
          Es un factor utilizado para ajustar valores en función del
          derecho de exportación aplicable.
        </p>
      </article>

      <article className="home__info">
        <h2>¿Cómo se calcula el coeficiente de exportación?</h2>
        <p>La fórmula utilizada es:</p>
        <p>
          <strong>1 / (1 + derecho de exportación / 100)</strong>
        </p>
        <p>
          Donde el derecho de exportación debe expresarse en formato decimal.
        </p>
      </article>

      <article className="home__info">
        <h2>Ejemplo práctico</h2>
        <p>
          Si el derecho de exportación es del 12%, el cálculo sería:
        </p>
        <p>
          <strong>1 / (1 + 12/100)</strong>
        </p>
        <p>
          <strong>Resultado: 0.89286</strong>
        </p>
      </article>

      <article className="home__info">
        <h2>¿Para qué sirve el coeficiente de exportación?</h2>
        <p>
          Este coeficiente permite ajustar precios, valores FOB y operaciones
          comerciales considerando las retenciones vigentes. Es utilizado por
          despachantes de aduana, exportadores y profesionales del comercio exterior.
        </p>
      </article>

      <article className="home__info">
        <h2>Marco normativo en Argentina</h2>
        <p>
          Los derechos de exportación en Argentina son establecidos por el
          Poder Ejecutivo, con base en el Código Aduanero (Ley 22.415), que gravan la salida de mercaderías y servicios.
        </p>
      </article>
    </section>
  );
}