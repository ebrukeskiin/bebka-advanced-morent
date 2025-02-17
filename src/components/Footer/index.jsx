import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>MORENT</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column-one">
            <div className="footer-column-one-title">
              <h4>About</h4>
            </div>
            <ul>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#featured">Featured</a>
              </li>
              <li>
                <a href="#partnership">Partnership</a>
              </li>
              <li>
                <a href="#business-relation">Business</a>
              </li>
            </ul>
          </div>
          <div className="footer-column-two">
            <div className="footer-column-two-title">
              <h4>Community</h4>
            </div>
            <ul>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#podcast">Podcast</a>
              </li>
              <li>
                <a href="#invite">Invite </a>
              </li>
            </ul>
          </div>
          <div className="footer-column-three">
            <div className="footer-column-three-title">
              <h4>Socials</h4>
            </div>
            <ul>
              <li>
                <a href="#discord">Discord</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" /> {/* Yatay çizgi burada olmalı */}
      <div className="footer-bottom">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="footer-policy">
          <a href="/privacy-policy">Privacy & Policy</a>
          <a href="/terms-condition">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
