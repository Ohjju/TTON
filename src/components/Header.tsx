import "../styles/global.scss";
import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header(props: any) {
  const { dashboard } = props;
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
          <FontAwesomeIcon className="hamburger" icon={faBars} />
        )}
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header>
    </>
  );
}
