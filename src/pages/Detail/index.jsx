import Header from "../../components/Header";
import FilterBar from "./../../components/FilterBar";
import DetailedView from "../../components/Detailedview";
import ReviewsSection from "../../components/ReviewsSection";
import CarCard from "../../components/CarCard";
import Footer from "../../components/Footer";
import carImage from "../../assets/images/cars/AllNewRush.png";
import "./styles.scss";
import useSWR from "swr";
import { useState } from "react";

const DetailPage = () => {
  const { data } = useSWR("/cars");
  const [viewAllPopular, setViewAllPopular] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }
  const popularCars = data.slice(0, 4);

  const handleViewAllPopular = () => {
    setViewAllPopular(!viewAllPopular);
  };

  return (
    <div>
      <Header />
      <div className="detail-page">
        <FilterBar />
        <DetailedView />
        <ReviewsSection />
        {/* Popular Cars */}
        <div className="popular-cars-detail-page">
          <div className="car-card-container-info">
            <h1>Recent Car</h1>
            <button className="button" onClick={handleViewAllPopular}>
              {viewAllPopular ? "View Less" : "View All"}
            </button>
          </div>
          <div className="cars-container-detail-page">
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
              />
            ))}
          </div>
        </div>
        {/* Popular Cars */}
        <div className="popular-cars-detail-page">
          <div className="car-card-container-info">
            <h1>Recomendation Car</h1>
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
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
