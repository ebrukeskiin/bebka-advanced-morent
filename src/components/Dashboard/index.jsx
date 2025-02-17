import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./styles.scss";

const data = [
  { name: "Sport Car", value: 17439, color: "#5A91F2" },
  { name: "SUV", value: 9478, color: "#7DA5E9" },
  { name: "Coupe", value: 18197, color: "#5392C7" },
  { name: "Hatchback", value: 12510, color: "#9ABEF3" },
  { name: "MPV", value: 14406, color: "#C4DBF9" },
];

const Dashboard = () => {
  const totalRentals = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Top 5 Car Rental</h2>
      <div className="dashboard-card">
        {/* Grafik kısmı */}
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5} // Pie dilimleri arasında boşluk
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={entry.color}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-center-text">
            <span className="chart-total">{totalRentals.toLocaleString()}</span>
            <br></br>
            <span className="chart-label">Rental Car</span>
          </div>
        </div>

        {/* Liste kısmı */}
        <ul className="dashboard-list">
          {data.map((item) => (
            <li key={item.name}>
              <span
                className="dot"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}: <span className="list-value">{item.value.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
