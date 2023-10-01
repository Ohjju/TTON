import StatusBar from "../components/StatusBar";
import SideBar from "../components/SideBar";
import BoardContent from "../components/BoardContent";
import "../styles/global.scss";

// 게시판
export default function Board() {
  return (
    <>
      <StatusBar></StatusBar>
      <main className="container side-flex">
        <SideBar></SideBar>
        <BoardContent></BoardContent>
      </main>
    </>
  );
}
