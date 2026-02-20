import arcaImg from "../assets/ARCA.webp";
import economiaImg from "../assets/ministerio-eco.webp";
import cdaImg from "../assets/cda.webp";
import tarifarImg from "../assets/tarifar.webp";
import ccerImg from "../assets/ccer.webp";
import "./PaginasInteres.css";

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
        <div className="pages">
            <h1 className="pages__title">Paginas de Interes.</h1>
            <div className="pages_grid">
                {
                    links.map((item) => (
                        <a key={item.title}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                        >
                            <div className="card__image-wrapper">
                                <img src={item.image} alt={item.title} className="card__img" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )

}