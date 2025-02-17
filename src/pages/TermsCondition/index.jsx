import "./styles.scss"; 

const TermsCondition = () => {
  return (
    <div className="terms-condition">
      <h1>Terms & Conditions</h1>
      <div className="terms-content">
        <p>
          Welcome to our Terms and Conditions page. By using our services, you agree to the following terms and conditions:
        </p>
        <ol>
          <li>
            <strong>Usage:</strong> You agree to use our services responsibly and in accordance with the laws of your jurisdiction.
          </li>
          <li>
            <strong>Privacy:</strong> We respect your privacy and are committed to protecting your personal information.
          </li>
          <li>
            <strong>Changes:</strong> We reserve the right to update or modify these terms at any time.
          </li>
          <li>
            <strong>Disclaimer:</strong> We are not liable for any damages or losses resulting from the use of our services.
          </li>
        </ol>
        <p>
          For more information, feel free to contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
