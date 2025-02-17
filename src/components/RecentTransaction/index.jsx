import React from "react";
import "./styles.scss";
import car1 from "../../assets/images/dashboard/car.png";
import car2 from "../../assets/images/dashboard/car1.png";
import car3 from "../../assets/images/dashboard/car2.png";
import car4 from "../../assets/images/dashboard/car3.png";

// Örnek Veri
const transactions = [
  {
    id: 1,
    image: car1, // Resim dosyasını ekleyin ya da placeholder URL kullanın.
    name: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    price: "$80.00",
  },
  {
    id: 2,
    image: car2,
    name: "Koenigsegg",
    type: "Sport Car",
    date: "19 July",
    price: "$99.00",
  },
  {
    id: 3,
    image: car3,
    name: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    price: "$96.00",
  },
  {
    id: 4,
    image: car4,
    name: "CR - V",
    type: "SUV",
    date: "17 July",
    price: "$80.00",
  },
];

const RecentTransaction = () => {
  return (
    <div className="recent-transactions">
      {/* Başlık */}
      <div className="header">
        <h2>Recent Transaction</h2>
        <a href="#!" className="view-all">
          View All
        </a>
      </div>

      {/* Transaction Listesi */}
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div className="transaction-item" key={transaction.id}>
            <img
              src={transaction.image}
              alt={transaction.name}
              className="car-image-dash"
            />
            <div className="transaction-details">
              <h3 className="car-name">{transaction.name}</h3>
              <p className="car-type">{transaction.type}</p>
            </div>
            <div className="transaction-meta">
              <p className="date">{transaction.date}</p>
              <p className="price">{transaction.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;
