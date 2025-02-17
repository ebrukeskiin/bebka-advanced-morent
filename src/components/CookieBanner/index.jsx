import { useState, useEffect } from "react";
import "./styles.scss";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  return (
    isVisible && (
      <div className="cookie-banner">
        <div className="cookie-banner-text">
          We use cookies to improve your experience. By continuing to browse,
          you agree to our use of cookies.
        </div>
        <button className="cookie-banner-button" onClick={handleAcceptCookies}>
          Accept
        </button>
        <button className="cookie-banner-button-one">Manage Cookies</button>
      </div>
    )
  );
};

export default CookieBanner;
