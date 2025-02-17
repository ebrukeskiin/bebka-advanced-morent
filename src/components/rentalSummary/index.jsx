
import "./style.scss";
import PropTypes from 'prop-types';


const RentalSummary = ({ car }) => {
  console.log({ car });

  
  const totalStars = 5; 
  const filledStars = 4; 
  const emptyStars = totalStars - filledStars; 

  return (
    <div className="rental-summary-container">
      <div>
        <h2 className="bold">Rental Summary</h2>
        <p>
          Prices may change depending on the length of the rental and the price
          of your rental.
        </p>
      </div>
      <div className="rental-summary-foto-container">
        <img src={car.img} alt={car.name} />
        <div>
          <h3 className="bold">{car.name}</h3>
          
          
          <div className="rental-summary-star-rating">
            
            {Array(filledStars).fill("★").map((star, index) => (
              <span key={`filled-${index}`} className="star-icon filled">
                {star}
              </span>
            ))}
            
            {Array(emptyStars).fill("☆").map((star, index) => (
              <span key={`empty-${index}`} className="star-icon empty">
                {star}
              </span>
            ))}
            <h4 className="reviewer">440+ Reviewer</h4>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="pricing">
        <p>Subtotal</p>
        <p className="bold">${car.price}</p>
      </div>
      <div className="pricing">
        <p>Tax</p>
        <p className="bold">$0</p>
      </div>

      <div className="promo-code">
        <div className="promo-input">
          <input type="text" placeholder="Apply promo code" />
          <button className="rental-summary-apply-button">Apply Now</button>
        </div>
      </div>

      <div className="total-price">
        <div>
          <h3 className="bold">Total Rental Price</h3>
          <p>Overall price including any discounts</p>
        </div>
        <h1 className="bold">${car.price}</h1>
      </div>
    </div>
  );
};

RentalSummary.propTypes = {
  car: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default RentalSummary;
