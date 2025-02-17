import "./styles.scss";
import PropTypes from 'prop-types';

const BillingInfo = ({ handleChange }) => {
  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <div className="billing-info">
      <h2>Billing Info</h2>

      <div className="billing-title">
        <p>Please fill in your billing details</p>
        <p>Step 1 of 4</p>
      </div>

      <div className="form-section">
        <div className="form-group-parent">
          <div className="form-group-left">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </div>
          </div>

          <div className="form-group-right">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder="Enter your phone number"
                pattern="^[0-9]{10}$"
                onInput={handlePhoneInput} // Add the event listener
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="town">Town/City</label>
              <input
                type="text"
                id="town"
                name="town"
                onChange={handleChange}
                placeholder="Enter your town or city"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BillingInfo.propTypes = {
  handleChange: PropTypes.func.isRequired, 
};

export default BillingInfo;
