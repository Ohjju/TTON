import "../styles/global.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import SideBarBoard from "../components/SideBarBoard";
import BoardContent from "../components/BoardContent";
import Header from "../components/Header";


// 게시판
export default function Board() {
  return (
    <>
      {/* <StatusBar></StatusBar> */}
      {/* <header className="header">
        <FontAwesomeIcon className="hamburger" icon={faBars} />
        <div className="logo"></div>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header> */}
      <Header gotoBoard="--main-color-30" />
      <main className="container side-style">
        <SideBarBoard></SideBarBoard>
        <BoardContent></BoardContent>
      </main>
    </>
  );
}
