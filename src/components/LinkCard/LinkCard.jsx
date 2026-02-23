import "./LinkCard.css";

const LinkCard = ({ title, description, url, image }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
    >
      <div className="link-card__image-wrapper">
        <img
          src={image}
          alt={`Ir a ${title}`}
          className="link-card__img"
        />
      </div>

      <h3 className="link-card__title">{title}</h3>
      <p className="link-card__description">{description}</p>
    </a>
  );
};

export default LinkCard;