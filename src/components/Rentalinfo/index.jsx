import "./styles.scss";
import PropTypes from 'prop-types';

const cities = ["Bursa", "Eskişehir", "Bilecik", "Ankara", "İstanbul"];

const RentalInfo = ({ handleChange }) => {
  return (
    <div className="rental-info">
      <h2>Rental Info</h2>

      <div className="rental-title">
        <p>Please select your rental date</p>
        <p>Step 2 of 4</p>
      </div>

      <div className="section-title">
        <input type="radio" name="rental-type" defaultChecked />
        <span>Pick - Up</span>
      </div>

      <div className="form-section">
        <div className="form-group-parent">
          <div className="form-group">
            <label htmlFor="pickup-location">Locations</label>
            <select onChange={handleChange} name="pickupLocation" id="pickup-location">
              <option>Select your city</option>
              {cities.map((city, index) => (
                <option
                  key={index}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pickup-date">Date</label>
            <input
              onChange={handleChange}
              type="date"
              name="pickupDate"
              className="date"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pickup-time">Time</label>
          <input
            onChange={handleChange}
            type="time"
            name="pickupTime"
            className="time"
          />
        </div>

        <div className="section-title">
          <input type="radio" name="rental-type" />
          <span>Drop - Off</span>
        </div>

        <div className="form-group-parent">
          <div className="form-group">
            <label htmlFor="pickup-location">Locations</label>
            <select onChange={handleChange} name="dropoffLocation" id="pickup-location">
              <option>Select your city</option>
              {cities.map((city, index) => (
                <option
                  key={index}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pickup-date">Date</label>
            <input
              onChange={handleChange}
              type="date"
              name="dropoffDate"
              className="date"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pickup-time">Time</label>
          <input
            onChange={handleChange}
            type="time"
            name="dropoffTime"
            className="time"
          />
        </div>
      </div>
    </div>
  );
};

RentalInfo.propTypes = {
  handleChange: PropTypes.func.isRequired, 
};

export default RentalInfo;
