import RangeSettings from "../../components/RangeSettings";
import "./styles.scss";
import "../../components/RecomendationCar/";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarCard from "../../components/CarCard";
import carImage from "../../assets/images/cars/AllNewRush.png";
import carImage1 from "../../assets/images/cars/BG.png";
import carImage2 from "../../assets/images/cars/BG1.png";
import useSWR from "swr";
import { useState } from "react";
import PromoCards from "../../components/PromoCards";

const Homepage = () => {
  const { data } = useSWR("/cars");
  const [viewAllPopular, setViewAllPopular] = useState(false);
  const [showMoreRecomendation, setShowMoreRecomendation] = useState(false);
  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "30px",
          color: "#000000",
          width: "100%",
        }}
      >
        Loading...
      </div>
    );
  }
  const popularCars = data.slice(0, 4);
  const recomendationCars = data.slice(4, 12);
  const moreRecomendationCars = data.slice(8, 16);
  const handleViewAllPopular = () => {
    setViewAllPopular(!viewAllPopular);
  };
  const handleShowMoreRecomendation = () => {
    setShowMoreRecomendation(!showMoreRecomendation);
  };
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="promocards">
          <PromoCards
            title="The Best Platform for Car Rental"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonText="Rental Car"
            image={carImage1}
            backgroundcolor="#54A6FF"
            buttontextcolor="#3563E9"
          />
          <PromoCards
            title="Easy way to rent a car at a low price"
            description="Providing cheap car rental services and safe and comfortable facilities."
            buttonText="Rental Car"
            image={carImage2}
            backgroundcolor="#3563E9"
            buttontextcolor="#54A6FF"
          />
        </div>
        <RangeSettings />
        {/* Popular Cars */}
        <div className="popular-cars">
          <div className="car-card-container-info">
            <h1>Popular Cars</h1>
            <button className="button" onClick={handleViewAllPopular}>
              {viewAllPopular ? "View Less" : "View All"}
            </button>
          </div>
          <div className="cars-container">
            {(viewAllPopular ? data : popularCars).map((car) => (
              <CarCard
                key={car.id}
                name={car.name}
                type={car.carType}
                image={carImage}
                fuel={car.storage}
                transmission={car.gearType}
                capacity={car.capacity}
                price={car.price}
                id={car.id}
              />
            ))}
          </div>
        </div>
        {/* Recomendation Cars */}
        <div className="recomendation-cars">
          <div className="car-card-container-info">
            <h1>Recomendation Cars</h1>
          </div>
          <div className="cars-container">
            {recomendationCars.map((car) => (
              <CarCard
                key={car.id}
                name={car.name}
                type={car.carType}
                image={carImage}
                fuel={car.storage}
                transmission={car.gearType}
                capacity={car.capacity}
                price={car.price}
                id={car.id}
              />
            ))}
            {showMoreRecomendation &&
              moreRecomendationCars.map((car) => (
                <CarCard
                  key={car.id}
                  name={car.name}
                  type={car.carType}
                  image={carImage}
                  fuel={car.storage}
                  transmission={car.gearType}
                  capacity={car.capacity}
                  price={car.price}
                  id={car.id}
                />
              ))}
          </div>
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={handleShowMoreRecomendation}
            >
              {showMoreRecomendation ? "Show Less Car" : "Show More Car"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
