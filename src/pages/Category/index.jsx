import Header from "../../components/Header";
import FilterBar from "./../../components/FilterBar";
import RangeSettings from "../../components/RangeSettings";
import CarCard from "../../components/CarCard";
import Footer from "../../components/Footer";
import carImage from "../../assets/images/cars/AllNewRush.png";
import "./styles.scss";
import useSWR from "swr";
import { useState } from "react";

const CategoryPage = () => {
  const { data } = useSWR("/cars");
  const [showMoreRecomendation, setShowMoreRecomendation] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }

  const recomendationCars = data.slice(4, 12);
  const moreRecomendationCars = data.slice(8, 16);
  const handleShowMoreRecomendation = () => {
    setShowMoreRecomendation(!showMoreRecomendation);
  };

  return (
    <>
      <Header />
      <div className="category-page">
        <RangeSettings />
        <FilterBar />
        {/* Recomendation Cars */}
        <div className="recomendation-cars-category">
          <div className="car-card-container-info"></div>
          <div className="cars-container-category">
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

export default CategoryPage;
