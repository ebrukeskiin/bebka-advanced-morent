import { useState } from "react";
import useSWR from "swr";
import "./styles.scss";
import IconMenu from "../../assets/images/header/menu.svg?react";
import filterIcon from "../../assets/images/header/filter.svg";
import heartIcon from "../../assets/images/header/heart.svg";
import ImageIcon from "../../assets/images/header/Image.svg";
import notificationIcon from "../../assets/images/header/notification.svg";
import searchIcon from "../../assets/images/header/search.svg";
import settingIcon from "../../assets/images/header/setting.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../DarkLightmode/theme";
import moon from "../../assets/images/darklightmode/moon.svg";
import sun from "../../assets/images/darklightmode/sun.svg";

const Header = () => {
  const { data } = useSWR("/cars");
  const [headerInput, setHeaderInput] = useState("");
  const [headerInputResponsive, setHeaderInputResponsive] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  function toggleMenu() {
    const openMenu = document.querySelector(".open-menu");
    openMenu.classList.toggle("active");
  }

  function toggleAdmin() {
    const openAdmin = document.querySelector(".admin");
    openAdmin.classList.toggle("active");
  }

  const addCharacter = (e) => {
    const value = e.target.value.toLowerCase();
    setHeaderInput(value);

    const filteredData = data.filter((car) =>
      car.name.toLowerCase().includes(value)
    );
    setSuggestions(filteredData.slice(0, 5));
  };

  const addChracterResponsive = (e) => {
    const value = e.target.value.toLowerCase();
    setHeaderInputResponsive(value);

    const filteredData = data.filter((car) =>
      car.name.toLowerCase().includes(value)
    );
    setSuggestions(filteredData.slice(0, 5));
  };

  return (
    <header>
      <div className="header">
        <div className="header-title-search">
          <div className="header-hamburger">
            <IconMenu className="menu-icon" onClick={toggleMenu} />
          </div>
          <div className="open-menu">
            <div className="menu-pages">
              <span>
                <IconMenu
                  className="menu-icon-close"
                  onClick={toggleMenu}
                  stroke="white"
                />
              </span>
              <ul className="pages-names">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/category">
                  <li>Category</li>
                </Link>
                <Link to="/details">
                  <li>Detail</li>
                </Link>
                <Link to="/payment">
                  <li>Payment</li>
                </Link>
                <Link to="/dashboard">
                  <li>Dashboard</li>
                </Link>
                <Link to="/privacy-policy">
                  <li>Privacy Policy</li>
                </Link>
                <Link to="/terms-condition">
                  <li>Terms & Condition</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="header-title">
            <h3
              onClick={() => {
                window.location.href = "/";
              }}
            >
              MORENT
            </h3>
          </div>
          <div className="header-search-box">
            <form>
              <img className="search-box-img" src={searchIcon} alt="#" />
              <input
                type="search"
                value={headerInput}
                onChange={addCharacter}
                placeholder="Search something here"
              />
              <img className="search-box-img" src={filterIcon} alt="#" />
            </form>
            {headerInput && (
              <div className="header-searching">
                <ul className="searching-items">
                  {suggestions.map((suggestion, index) => (
                    <Link
                      key={index}
                      id="searching-item-link"
                      to={`/details/?name=${suggestion.name}`}
                    >
                      <li className="searching-item" key={index}>
                        {suggestion.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <ul className="header-buttons">
          <a>
            <li>
              <button className="header-button">
                <img className="header-button-img" src={heartIcon} alt="#" />
              </button>
            </li>
          </a>
          <a>
            <li>
              <button className="header-button">
                <img
                  className="header-button-img"
                  src={notificationIcon}
                  alt="#"
                />
              </button>
              <span className="header-red-point"></span>
            </li>
          </a>
          <a>
            <li>
              <button className="header-button">
                <img className="header-button-img" src={settingIcon} alt="#" />
              </button>
            </li>
          </a>
          <a>
            <li>
              <button className="header-button">
                <img className="header-button-img" src={ImageIcon} alt="#" />
              </button>
            </li>
          </a>
          <a>
            <li>
              <button className="header-button-responsiveness">
                <img className="header-button-img" src={ImageIcon} alt="#" />
              </button>
            </li>
          </a>
          <a>
            <li>
              {theme === "dark-theme" && (
                <button className="theme-icon" onClick={toggleTheme}>
                  <img className="theme-icon" src={sun} />
                </button>
              )}
              {theme === "light-theme" && (
                <button className="theme-icon" onClick={toggleTheme}>
                  <img className="theme-icon" src={moon} />
                </button>
              )}
            </li>
          </a>
        </ul>

        <ul className="header-buttons-responsiveness">
          <li>
            <button className="header-button">
              <img
                className="header-button-img"
                src={ImageIcon}
                alt="#"
                onClick={toggleAdmin}
              />
            </button>
          </li>
          <div className="admin">
            <ul>
              <li>
                <button>
                  <img src={heartIcon} alt="#" />
                </button>
              </li>
              <li>
                <button>
                  <img src={notificationIcon} alt="#" />
                </button>
              </li>
              <li>
                <button>
                  <img src={settingIcon} alt="#" />
                </button>
              </li>
            </ul>
          </div>
        </ul>

        <div className="admin">
          <ul>
            <li>
              <button>
                <img src={heartIcon} alt="#" />
              </button>
            </li>
            <li>
              <button>
                <img src={notificationIcon} alt="#" />
              </button>
            </li>
            <li>
              <button>
                <img src={settingIcon} alt="#" />
              </button>
            </li>
            <li>
              {theme === "dark-theme" && (
                <button className="theme-icon" onClick={toggleTheme}>
                  <img className="theme-icon" src={sun} />
                </button>
              )}
              {theme === "light-theme" && (
                <button className="theme-icon" onClick={toggleTheme}>
                  <img className="theme-icon" src={moon} />
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="header-responsiveness-part">
        <div className="header-search-box-responseveness">
          <form>
            <img className="search-box-img" src={searchIcon} alt="#" />
            <input
              type="search"
              value={headerInputResponsive}
              onChange={addChracterResponsive}
              placeholder="Search something here"
            />
            {headerInputResponsive && (
              <div className="header-searching-responsive">
                <ul className="searching-items-responsive">
                  {suggestions.map((suggestion, index) => (
                    <Link
                      key={index}
                      id="searching-item-link-responsive"
                      to={`/details/?name=${suggestion.name}`}
                    >
                      <li className="searching-item-responsive" key={index}>
                        {suggestion.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </form>

          <button>
            <img className="search-box-img" src={filterIcon} alt="#" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
