import "../styles/global.scss";
import "../styles/calendarSide.scss";
import MiniCalendar from "./MiniCalendar";
import BoardGroupList from "./BoardGroupList";

export default function SideBar() {
  return (
    <>
      <nav className="side-bar" style={{ width: "24rem" }}>
        <MiniCalendar />
        <BoardGroupList />
      </nav>
    </>
  );
}
