import GPSMap from "../GpsMap/index";
import React, { useState, useEffect } from "react";
import "./styles.scss"; // Stilleri dahil ediyoruz
import car1 from "../../assets/images/dashboard/detailscar.png";

const DetailsRental = () => {
  const [iller, setIller] = useState([]);

  useEffect(() => {
    fetch("/iller.json")
      .then((response) => response.json())
      .then((data) => setIller(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="details-rental">
      <h2>Details Rental</h2>

      {/* GPS Haritası */}
      <div className="map-container">
        <GPSMap />
      </div>

      {/* Araç Detayları */}
      <div className="rental-details">
        <div className="car-info">
          <div className="img">
            <img src={car1} alt="Nissan GT-R" />
          </div>
          <div>
            <h3>Nissan GT - R</h3>
            <p>Sport Car</p>
          </div>
        </div>

        <div className="rental-dates">
          {/* Pick-Up Section - İlk div */}
          <div className="Pick-Up">
            <label className="section-label">
              <input type="radio" name="service-type" defaultChecked="" />
              <span>Pick-Up</span>
            </label>
            <div className="fields">
              <div className="input-group">
                <label>Locations</label>
                <select>
                  <option>Select your city</option>
                  {iller.map((il) => (
                    <option key={il.id} value={il.name}>
                      {il.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="input-group">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>
          </div>

          <div className="Drop-off">
            <label className="section-label">
              <input type="radio" name="service-type" />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                Drop-Off
              </span>
            </label>
            <div className="fields">
              <div className="input-group">
                <label>Locations</label>
                <select>
                  <option>Select your city</option>
                  {iller.map((il) => (
                    <option key={il.id} value={il.name}>
                      {il.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="input-group">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toplam Ücret */}
      <div className="total-price">
        <p>Total Rental Price</p>
        <h2>$80.00</h2>
      </div>
    </div>
  );
};

export default DetailsRental;
