import "./styles.scss";

// eslint-disable-next-line react/prop-types
const SampleCar = ({ title, img, subtitle }) => {
  return (
    <div className="car-container">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <img className="image" src={img} alt="car" />
      <button className="button">Buy Now</button>
    </div>
  );
};

export default SampleCar;
