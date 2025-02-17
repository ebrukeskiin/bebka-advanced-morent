import React, { useState } from "react";
import "./styles.scss";
import home from "../../assets/images/dashboard/side/home.png";
import message from "../../assets/images/dashboard/side/message.png";
import calendar from "../../assets/images/dashboard/side/calendar.png";
import briefcase from "../../assets/images/dashboard/side/briefcase.png";
import car from "../../assets/images/dashboard/side/car.png";
import chart from "../../assets/images/dashboard/side/chart.png";
import logout from "../../assets/images/dashboard/side/logout.png";
import setting from "../../assets/images/dashboard/side/setting.png";
import info from "../../assets/images/dashboard/side/info.png";
import wallet from "../../assets/images/dashboard/side/empty-wallet.png";

const Sidebar = () => {
  // State to control whether the sidebar is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="menu-section">
        <h3>Main Menu</h3>
        <ul>
          <li className="active">
            <img src={home} alt="Dashboard Icon" />
            Dashboard
          </li>
          <li>
            <img src={car} alt="Car Rent Icon" />
            Car Rent
          </li>
          <li>
            <img src={chart} alt="Insight Icon" />
            Insight
          </li>
          <li>
            <img src={wallet} alt="Reimburse Icon" />
            Reimburse
          </li>
          <li>
            <img src={message} alt="Inbox Icon" />
            Inbox
          </li>
          <li>
            <img src={calendar} alt="Calendar Icon" />
            Calendar
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Preferences</h3>
        <ul>
          <li>
            <img src={setting} alt="Settings Icon" />
            Settings
          </li>
          <li>
            <img src={info} alt="Help Icon" />
            Help & Center
          </li>
          <li>
            <img src={briefcase} alt="Dark Mode Icon" />
            Dark Mode
          </li>
        </ul>
      </div>

      <button className="logout-button">
        <img src={logout} alt="Logout Icon" />
        Log Out
      </button>

      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        <span className={isOpen ? "open" : "closed"}>&gt;</span>{" "}
        {/* ">" symbol */}
      </button>
    </div>
  );
};

export default Sidebar;
