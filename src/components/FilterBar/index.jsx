import { useState } from "react";
import "./styles.scss";

const FilterBar = ({ isOpenBar }) => {
  const [isOpen, setIsOpen] = useState(isOpenBar);
  const [price, setPrice] = useState(100);
  const minPrice = 0;
  const maxPrice = 1000;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const updateFilterValue = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={`filter-sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "<" : ">"}
      </button>
      {isOpen && (
        <div>
          <div className="sidebar-type">
            <h2 className="sidebar-title">TYPE</h2>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>Sport (10)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>SUV (12)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>MPV (16)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>Sedan (20)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>Coupe (14)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>Hatchback (14)
            </label>
          </div>

          <div className="sidebar-capacity">
            <h2 className="sidebar-title">CAPACİTY</h2>

            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>2 Person (10)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>4 Person (14)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>6 Person (12)
            </label>
            <label className="sidebar-label-container">
              <input type="checkbox" name="test" />
              <span className="checkmark"></span>8 or More (16)
            </label>
          </div>

          <div className="sidebar-price">
            <h2 className="sidebar-title">PRİCE</h2>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
            />
            <p>Max. ${price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
