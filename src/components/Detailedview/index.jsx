import "./styles.scss";
import image1 from "../../assets/images/detailed-view/View1.png";
import image2 from "../../assets/images/detailed-view/View2.png";
import image3 from "../../assets/images/detailed-view/View3.png";
import bgCar from "../../assets/images/detailed-view/BGView.png";
import HeartIcon from "../../assets/images/detailed-view/Vector.svg?react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

const DetailedView = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState(bgCar);
  const [searchParams] = useSearchParams();
  let name = searchParams.get("name");

  if (name) {
    name = encodeURIComponent(name);
  } else {
    console.warn("Name is not defined.");
  }

  const { data, error, isLoading } = useSWR(
    name ? `/cars/?name=${name}` : null
  );

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  // Fallback kontrolü
  const carData = data?.[0] || {};

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const imageHandler = (image) => {
    setMainImage(image);
  };

  return (
    <div className="card-container">
      <div className="card-left">
        <div className="text-overlay">
          <div className="main-image-container">
            <img
              src={mainImage}
              alt={carData.name || "Car"}
              className="main-image"
            />
          </div>
          <div className="position">
            <h2>Sports car with the best design and acceleration</h2>
            <p>
              {carData.description ||
                "Safety and comfort while driving a futuristic and elegant sports car"}
            </p>
          </div>
        </div>

        <div className="thumbnail-container">
          <img
            onClick={() => {
              imageHandler(image1);
            }}
            style={{ cursor: "pointer" }}
            className="car-small"
            src={image1}
            alt="Car thumbnail"
          />
          <img
            onClick={() => {
              imageHandler(image2);
            }}
            style={{ cursor: "pointer" }}
            className="thumbnail"
            src={image2}
            alt="Interior thumbnail"
          />
          <img
            onClick={() => {
              imageHandler(image3);
            }}
            style={{ cursor: "pointer" }}
            className="thumbnail"
            src={image3}
            alt="Seats thumbnail"
          />
        </div>
      </div>

      <div className="card-right">
        <div className="title-review-heart">
          <div className="title-review">
            <h3>{carData.name || "Nissan GTR"}</h3>
            <p className="review-star">
              <span className="stars">
                {"★".repeat(carData.rating || 4)}{" "}
                {"☆".repeat(5 - (carData.rating || 4))}{" "}
              </span>{" "}
              {carData.view || "440+"} Reviewer
            </p>
          </div>
          <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
            <HeartIcon
              fill={isFavorite ? "red" : "none"}
              stroke={isFavorite ? "none" : "gray"}
            />
          </div>
        </div>
        <p>
          NISMO has become the embodiment of Nissan&quot;s outstanding
          performance, inspired by the most unforgiving proving ground, the
          &quot;race track&quot;.
        </p>

        <div className="details">
          <p>
            Type Car <strong>{carData.carType || "Sport"}</strong>
          </p>
          <p>
            Capacity <strong>{carData.capacity || "2 Person"}</strong>
          </p>
          <p>
            Steering <strong>{carData.gearType || "Manual"}</strong>
          </p>
          <p>
            Gasoline <strong>{carData.storage || "70"} L</strong>
          </p>
        </div>
        <div className="price-container">
          <div className="price">
            <p>
              <span className="current-price">${carData.price || "80.00"}</span>{" "}
              / days
            </p>
            <del className="old-price">
              ${carData.price ? (carData.price * 1.3).toFixed(2) : "100.00"}
            </del>
          </div>
          <button className="rent-button">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
