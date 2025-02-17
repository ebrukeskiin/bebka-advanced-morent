import { useState } from "react";
import "./styles.scss";
import PaymentMethod from "../../components/paymentMethod";
import Rentalinfo from "../../components/Rentalinfo";
import Confirmation from "../../components/Confirmation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BillingInfo from "./../../components/Billinginfo/index";
import RentalSummary from "../../components/rentalSummary";
import CarImage from "../../assets/images/cars/car.png";

const PaymentPage = () => {
  const car = {
    id: 1,
    name: "Nissan GT-R",
    img: CarImage,
    price: "80.0",
  };

  const [paymentForm, setPaymentForm] = useState({
    name: "",
    phone: "",
    address: "",
    town: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
    creditcardNumber: "",
    creditcardExpiration: "",
    creditcardHolder: "",
    creditcardCVC: "",
    payPallNumber: "",
    payPallExpiration: "",
    payPallHolder: "",
    payPallCVC: "",
    bitcoinNumber: "",
    bitcoinExpiration: "",
    bitcoinHolder: "",
    bitcoinCVC: "",
    confirmationAdds: false,
    confirmationPolicy: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentForm({
      ...paymentForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    let error = "";

    const isPickupOrDropoffValid =
      (paymentForm.pickupLocation.trim() &&
        paymentForm.pickupDate.trim() &&
        paymentForm.pickupTime.trim()) ||
      (paymentForm.dropoffLocation.trim() &&
        paymentForm.dropoffDate.trim() &&
        paymentForm.dropoffTime.trim());

    const isPaymentMethodValid =
      (paymentForm.creditcardNumber &&
        paymentForm.creditcardExpiration &&
        paymentForm.creditcardHolder &&
        paymentForm.creditcardCVC) ||
      (paymentForm.payPallNumber &&
        paymentForm.payPallExpiration &&
        paymentForm.payPallHolder &&
        paymentForm.payPallCVC) ||
      (paymentForm.bitcoinNumber &&
        paymentForm.bitcoinExpiration &&
        paymentForm.bitcoinHolder &&
        paymentForm.bitcoinCVC);

    const isBillingInfoValid =
      paymentForm.name.trim() &&
      paymentForm.phone.trim() &&
      paymentForm.address.trim() &&
      paymentForm.town.trim();

    const isConfirmationValid =
      paymentForm.confirmationAdds && paymentForm.confirmationPolicy;

      if (!isBillingInfoValid) {
        error += "Please fill in all billing information fields.\n";
      }
      if (!isPickupOrDropoffValid) {
        error += "Please provide either pickup or dropoff details.\n";
      }
      if (!isPaymentMethodValid) {
        error += "Please provide valid payment details.\n";
      }
      if (!isConfirmationValid) {
        error += "You must agree to all terms and conditions.\n";
      }
      
  
      if (error) {
        setErrorMessage(error);
        alert(error);
        return;
      }
  
      setErrorMessage(""); 
      alert("Form submitted successfully!");
  };

  return (
    <div className="payment">
      <Header />
      <div className="container1">
        <div className="first-column">
          <BillingInfo handleChange={handleChange} />
          <Rentalinfo handleChange={handleChange} />
          <PaymentMethod handleChange={handleChange} />
          {errorMessage && (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          )}
          <Confirmation
            paymentForm={paymentForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </div>
        <div className="second-column">
          <RentalSummary car={car} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
