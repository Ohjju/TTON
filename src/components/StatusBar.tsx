import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.scss";
import "../styles/calendarStatus.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const userImg = require("../assets/img/user/profile.png");
const logo = require("../assets/img/logo.png");

export default function StatusBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <header className="header">
        <FontAwesomeIcon
          onClick={toggleNav}
          icon={faBars}
          style={{ color: "#ffffff", fontSize: "25px" }}
        />
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <ul>
          <li>
            <a href="/">
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-solid fa-bell" style={{ color: "#ffffff" }}></i>
            </a>
          </li>
          <li>
            <div className="profile-status">
              <img src={userImg} alt={userImg} />
            </div>
          </li>
        </ul>
      </header>
      <div>
        {toggleMenu && (
          <nav className="nav">
            <ul className="list">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>
              <li>
                <Link to="*">
                  <FontAwesomeIcon icon={faClipboard} />
                </Link>
              </li>
              <li>
                <Link to="/calendar">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </Link>
              </li>
              <li>
                <Link to="/Todo">
                  <FontAwesomeIcon icon={faSquareCheck} />
                </Link>
              </li>
              <li>
                <Link to="/Board">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
