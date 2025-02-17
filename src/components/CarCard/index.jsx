import "./styles.scss";
import "../../App.scss";
import Button from "../../components/Button";
import CarIcon from "../../assets/icons/Car.svg";
import HeartIcon from "../../assets/icons/heart.svg?react";
import UsersIcon from "../../assets/icons/users.svg";
import GasIcon from "../../assets/icons/gas-station.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CarCard = ({
  name,
  type,
  image,
  fuel,
  transmission,
  capacity,
  price,
  id,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="car-card">
      <div className="car-card-header">
        <div className="car-card-header-info">
          <h2>{name}</h2>
          <p>{type}</p>
        </div>
        <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
          <HeartIcon
            fill={isFavorite ? "red" : "none"}
            stroke={isFavorite ? "none" : "gray"}
          />
        </div>
      </div>
      <div className="car-image">
        <img src={image} alt={`${name}`} />
      </div>
      <div className="car-details">
        <div className="detail-item">
          <img src={GasIcon} alt="Gas Icon" className="detail-icon" />
          <span>{fuel}L</span>
        </div>
        <div className="detail-item">
          <img src={CarIcon} alt="Car Icon" className="detail-icon" />
          <span>{transmission}</span>
        </div>
        <div className="detail-item">
          <img src={UsersIcon} alt="Users Icon" className="detail-icon" />
          <span>{capacity} People</span>
        </div>
      </div>
      <div className="car-card-footer">
        <p>
          <span className="fs-14">${price}/</span>
          <span className="fc-day">day</span>
        </p>
        <Link id="searching-item-link-responsive" to={`/details/?name=${name}`}>
          <Button>Rent Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
