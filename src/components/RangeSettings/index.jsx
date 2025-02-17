import { useState, useEffect } from "react";
import "./styles.scss";

const RangeSettings = () => {
  const [iller, setIller] = useState([]);
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    fetch("/iller.json")
      .then((response) => response.json())
      .then((data) => setIller(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="container">
      {/* Yer değiştirme butonu */}
      <div className="arrow-icon">
        <button onClick={handleSwap}>⇅</button>
      </div>

      {/* Pick-Up Section - İlk div */}
      <div className={`section ${isSwapped ? "swapped" : ""}`}>
        <label className="section-label">
          <input type="radio" name="service-type" defaultChecked="" />
          <span>Pick-Up</span>
        </label>
        <div className="fields">
          <div className="input-group">
            <label>Locations</label>
            <select>
              <option>Select your city</option>
              {iller.map((il) => (
                <option key={il.id} value={il.name}>
                  {il.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Time</label>
            <input type="time" />
          </div>
        </div>
      </div>

      {/* Drop-Off Section - İkinci div */}
      <div className={`section ${isSwapped ? "" : "swapped"}`}>
        <label className="section-label">
          <input type="radio" name="service-type" />
          <span>Drop-Off</span>
        </label>
        <div className="fields">
          <div className="input-group">
            <label>Locations</label>
            <select>
              <option>Select your city</option>
              {iller.map((il) => (
                <option key={il.id} value={il.name}>
                  {il.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Time</label>
            <input type="time" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSettings;
