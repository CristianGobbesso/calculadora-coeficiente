import arcaImg from "../assets/ARCA.webp";
import economiaImg from "../assets/ministerio-eco.webp";
import cdaImg from "../assets/cda.webp";
import tarifarImg from "../assets/tarifar.webp";
import ccerImg from "../assets/ccer.webp";
import "./PaginasInteres.css";
import LinkCard from "../components/LinkCard/LinkCard";

export default function PaginasInteres() {

    const links = [
        {
            title: "ARCA",
            description: "Portal principal de la Agencia de Recaudación y Control Aduanero.",
            url: "https://www.afip.gob.ar/",
            image: arcaImg
        },
        {
            title: "Ministerio de Economía",
            description: "Normativas y políticas económicas.",
            url: "https://www.argentina.gob.ar/economia",
            image: economiaImg
        },
        {
            title: "Centro Despachantes de Aduanas",
            description: "Centro Despachantes de Aduana de la República Argentina",
            url: "https://www.cda.org.ar/",
            image: cdaImg
        },
        {
            title: "Tarifar",
            description: "Líder en Información sobre comercio exterior",
            url: "https://web.tarifar.com/",
            image: tarifarImg
        },
        {
            title: "CCER",
            description: "Sitio Web de la Cámara de Comercio Exterior",
            url: "https://commerce.com.ar/",
            image: ccerImg
        }
    ];


    return (
        <main className="pages">
            <section className="pages__hero">
                <h1 className="pages__title">
                    Recursos Clave de Comercio Exterior
                </h1>
                <p className="pages__subtitle">
                    Sitios oficiales y herramientas esenciales para profesionales
                    del comercio internacional y despachantes de aduana.
                </p>
            </section>

            <section className="pages__section">
                <article className="pages__context">
                    <h2>Organismos y entidades del comercio exterior argentino</h2>
                    <p>
                        El comercio exterior en Argentina está regulado por diversos organismos
                        oficiales que establecen normativas tributarias, aduaneras y económicas.
                        Además, existen entidades profesionales y herramientas especializadas
                        que brindan información técnica y actualizaciones del sector.
                    </p>
                    <p>
                        A continuación se presentan los principales recursos utilizados por
                        profesionales del comercio internacional para la gestión de operaciones
                        de exportación e importación.
                    </p>
                </article>
            </section>

            <section className="pages__section">
                <div className="pages__grid">
                    {links.map((item) => (
                        <LinkCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}