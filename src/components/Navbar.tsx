import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <ul className="list">
        <li>
          <FontAwesomeIcon icon={faHouse} />
        </li>
        <li>
          <FontAwesomeIcon icon={faClipboard} />;
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDays} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSquareCheck} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
      </ul>
    </nav>
  );
}
