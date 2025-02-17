import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./styles.scss";
import ReviewImage1 from "../../assets/images/review-section/female-photo.svg";
import ReviewImage2 from "../../assets/images/review-section/male-photo.svg";

const reviewsData = [
  {
    id: 1,
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "21 July 2022",
    stars: 5,
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    photo: <img className="review-photo" src={ReviewImage2} alt="#" />,
  },

  {
    id: 2,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    stars: 3,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    photo: <img className="review-photo" src={ReviewImage1} alt="#" />,
  },

  {
    id: 3,
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "20 July 2022",
    stars: 4,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    photo: <img className="review-photo" src={ReviewImage2} alt="#" />,
  },

  {
    id: 4,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    stars: 1,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    photo: <img className="review-photo" src={ReviewImage1} alt="#" />,
  },

  {
    id: 5,
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "20 July 2022",
    stars: 4,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    photo: <img className="review-photo" src={ReviewImage2} alt="#" />,
  },

  {
    id: 6,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    stars: 5,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    photo: <img className="review-photo" src={ReviewImage1} alt="#" />,
  },
];

const Review = ({ review }) => {
  return (
    <div className="review">
      <img
        src={review.photo.props.src}
        alt={`${review.name}`}
        className="review-photo"
      />
      <div className="review-info">
        <h3>{review.name}</h3>
        <p>{review.role}</p>
        <p>{review.comment}</p>
        <div className="review-stars">
          <ReactStars
            count={5}
            value={review.stars}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
        </div>
        <div className="review-date">
          <p>{review.date}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewList = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviewsData : reviewsData.slice(0, 2);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className="review-list">
      <h2>
        Reviews <span className="review-count">{reviewsData.length}</span>
      </h2>
      {displayedReviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <button onClick={handleToggle}>
        {showAll ? "Show Less △" : "Show All ▽"}
      </button>
    </div>
  );
};

export default ReviewList;
