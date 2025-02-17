import "./styles.scss";

const Card = ({ title, description, buttonText, image, backgroundcolor, buttontextcolor }) => {
  return (
    <div className="promocards">
      <div className="card" style={{ backgroundColor: backgroundcolor }}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <button className="card-button"style={{ backgroundColor: buttontextcolor }}>{buttonText}</button>
        </div>
        <img src={image} alt="Car" className="card-image" />
      </div>
    </div>
  );
};

export default Card;

