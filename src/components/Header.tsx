import "../styles/global.scss";
import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faSquareCheck,
  faClipboard,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

export default function Header(props: any) {
  const { dashboard, gotoBoard, gotoTodo, gotoCalendar } = props;
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="header">
        {dashboard ? (
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            style={{ color: "transparent" }}
          />
        ) : (
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            onClick={() => {
              document.querySelector(".nav")?.classList.toggle("show");
            }}
          />
        )}
        <Link to="/dashboard">
          <div className="logo"></div>
        </Link>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header>

      <nav className="nav">
        <ul className="list">
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faHouse} className="gotoHomeIcon" />
            </Link>
          </li>
          <li>
            <Link to="/Board">
              <FontAwesomeIcon
                icon={faClipboard}
                className="gotoBoardIcon"
                style={{ color: `var(${gotoBoard})` }}
              />
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="gotoCalendarIcon"
                style={{ color: `var(${gotoCalendar})` }}
              />
            </Link>
          </li>
          <li>
            <Link to="/Todo">
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="gotoTodoIcon"
                style={{ color: `var(${gotoTodo})` }}
              />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="gotoEmailIcon" />
          </li>
        </ul>
      </nav>
    </>
  );
}
