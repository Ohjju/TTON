import "../styles/global.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import SideBarBoard from "../components/SideBarBoard";
import BoardContent from "../components/BoardContent";

// 게시판
export default function Board() {
  return (
    <>
      {/* <StatusBar></StatusBar> */}
      <header className="header">
        <FontAwesomeIcon className="hamburger" icon={faBars} />
        <div className="logo"></div>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header>
      <main className="container side-style">
        <SideBarBoard></SideBarBoard>
        <BoardContent></BoardContent>
      </main>
    </>
  );
}
