import { useState, useEffect } from "react";
import "./styles.scss";
import bitcoinIcon from "../../assets/images/Payment-Method/Bitcoin.svg";
import paypalIcon from "../../assets/images/Payment-Method/PayPal.svg";
import visaIcon from "../../assets/images/Payment-Method/Visa.svg";
import PropTypes from 'prop-types';

const Payment = ({handleChange}) => {
  useEffect(() => {
    const creditCard = document.getElementById("creditCard");
    const paymentVisa = document.getElementById("paymentVisa");

    const payPal = document.getElementById("payPal");
    const paymentPayPal = document.getElementById("paymentPayPal");

    const bitcoin = document.getElementById("bitcoin");
    const paymentBitcoin = document.getElementById("paymentBitcoin");

    const handleRadioChange = () => {
      if (creditCard.checked) {
        paymentVisa.style.display = "block";
        paymentPayPal.style.display = "none";
        paymentBitcoin.style.display = "none";
      } else if (payPal.checked) {
        paymentVisa.style.display = "none";
        paymentPayPal.style.display = "block";
        paymentBitcoin.style.display = "none";
      } else if (bitcoin.checked) {
        paymentVisa.style.display = "none";
        paymentPayPal.style.display = "none";
        paymentBitcoin.style.display = "block";
      }
    };
    creditCard.addEventListener("change", handleRadioChange);
    payPal.addEventListener("change", handleRadioChange);
    bitcoin.addEventListener("change", handleRadioChange);
    // Cleanup function
    return () => {
      creditCard.removeEventListener("change", handleRadioChange);
      payPal.removeEventListener("change", handleRadioChange);
      bitcoin.removeEventListener("change", handleRadioChange);
    };
  }, []);

  const [cardNumber, setCardNumber] = useState("");
  const [message, setMessage] = useState("");

  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const handleKeyUp = (event) => {
    const cardNumberInput = event.target.value.replace(/\s+/g, ""); // Boşlukları kaldır
    const formattedCardNumber =
      cardNumberInput.match(/.{1,4}/g)?.join(" ") || cardNumberInput;
    setCardNumber(formattedCardNumber);

    if (cardNumberInput.length === 16) {
      if (!luhnCheck(cardNumberInput)) {
        setMessage("Lütfen kart numaranızı doğru girdiğinizden emin olunuz.");
      } else {
        setMessage("");
      }
    } else {
      setMessage("Lütfen 16 haneli kart bilgilerinizi giriniz.");
    }
  };

  return (
    <div className="payment-container">
      <h4>Payment Method</h4>
      <div className="payment-container-text">
        <p>Please enter your payment method</p>
        <p>Step 3 of 4</p>
      </div>
      <div className="payment-options">
        <div className="payment-option">
          <div className="option-first-row">
            <div className="radio-input">
              <input
                type="radio"
                id="creditCard"
                name="pay"
                value="creditCard"
                required
              />
              <label htmlFor="creditCard">Credit Card</label>
            </div>
            <img src={visaIcon} alt="#" />
          </div>

          <div className="option-second-row" id="paymentVisa">
            <div className="payment-information">
              <div className="left-payment-information">
                <div className="information">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="input-card-number"
                    maxLength={19}
                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                    placeholder="Card number"
                    value={cardNumber}
                    name="creditcardNumber"
                    onChange= {(e) => {
                      handleKeyUp(e);
                      handleChange(e);
                    }}
                  />
                  <span className="message" id="message">
                    {message}
                  </span>
                </div>
                <div className="information">
                  <label htmlFor="cardHolder">Card Holder</label>
                  <input onChange={handleChange} name="creditcardHolder" className="card-holder" placeholder="Card holder" />
                </div>
              </div>
              <div className="right-payment-information">
                <div className="information">
                  <label htmlFor="date">Expiration Date</label>
                  <input  onChange={handleChange} name="creditcardExpiration" type="month" />
                </div>
                <div className="information">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    className="input-cvv"
                    maxLength={3}
                    placeholder="CVC"
                    onChange={handleChange} name="creditcardCVC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-option">
          <div className="option-first-row">
            <div className="radio-input">
              <input type="radio" id="payPal" name="pay" required />
              <label htmlFor="payPal">PayPal</label>
            </div>
            <img src={paypalIcon} alt="#" />
          </div>
          <div className="option-second-row" id="paymentPayPal">
            <div className="payment-information">
              <div className="left-payment-information">
                <div className="information">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="input-card-number"
                    maxLength={19}
                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                    placeholder="Card number"
                    value={cardNumber}
                    name="payPallNumber"
                    onChange= {(e) => {
                      handleKeyUp(e);
                      handleChange(e);
                    }}
                  />
                  <span className="message" id="message">
                    {message}
                  </span>
                </div>
                <div className="information">
                  <label htmlFor="cardHolder">Card Holder</label>
                  <input onChange={handleChange} name="payPallHolder" className="card-holder" placeholder="Card holder" />
                </div>
              </div>
              <div className="right-payment-information">
                <div className="information">
                  <label htmlFor="date">Expiration Date</label>
                  <input onChange={handleChange} name="payPallExpiration" type="month" />
                </div>
                <div className="information">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    className="input-cvv"
                    maxLength={3}
                    placeholder="CVC"
                    onChange={handleChange} name="payPallCVC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-option">
          <div className="option-first-row">
            <div className="radio-input">
              <input type="radio" id="bitcoin" name="pay" required />
              <label htmlFor="bitcoin">Bitcoin</label>
            </div>
            <img src={bitcoinIcon} alt="#" />
          </div>
          <div className="option-second-row" id="paymentBitcoin">
            <div className="payment-information">
              <div className="left-payment-information">
                <div className="information">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="input-card-number"
                    maxLength={19}
                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                    placeholder="Card number"
                    value={cardNumber}
                    name="bitcoinNumber"
                    onChange= {(e) => {
                      handleKeyUp(e);
                      handleChange(e);
                    }}
                  />
                  <span className="message" id="message">
                    {message}
                  </span>
                </div>
                <div className="information">
                  <label htmlFor="cardHolder">Card Holder</label>
                  <input onChange={handleChange} name="bitcoinHolder" className="card-holder" placeholder="Card holder" />
                </div>
              </div>
              <div className="right-payment-information">
                <div className="information">
                  <label htmlFor="date">Expiration Date</label>
                  <input onChange={handleChange} name="bitcoinExpiration" type="month" />
                </div>
                <div className="information">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    className="input-cvv"
                    maxLength={3}
                    placeholder="CVC"
                    onChange={handleChange} name="bitcoinCVC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {
  handleChange: PropTypes.func.isRequired, 
};

export default Payment;