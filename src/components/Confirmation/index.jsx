
import "./styles.scss";
import PropTypes from "prop-types";
import icon from "../../assets/images/ic-security-safety.svg";

const Confirmation = ({ paymentForm, handleChange, handleSubmit, errorMessage, }) => {

  return (
    <div className="confirmation-part">
      <h2>Confirmation</h2>
      <div className="confirmation-title">
        <p>We are getting to the end. Just a few clicks and your rental is ready!</p>
        <p>Step 4 of 4</p>
      </div>
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="checkbox-main-group">
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="confirmationAdds"
              checked={paymentForm.confirmationAdds}
              onChange={handleChange}
            />
            I agree with sending marketing and newsletter emails. No spam, promised!
          </label>
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="confirmationPolicy"
              checked={paymentForm.confirmationPolicy}
              onChange={handleChange}
            />
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
      </div>
      <button
        className="rent-now"
        onClick={handleSubmit}
      >
        Rent Now
      </button>
      <div className="security">
        <img className="icon-image" src={icon} alt="security icon" />
        <div>
          <p className="first-line">All your data are safe</p>
          <p className="second-line">
            We are using the most advanced security to provide you the best experience ever.
          </p>
        </div>
      </div>
    </div>
  );
};

Confirmation.propTypes = {
  paymentForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

export default Confirmation;