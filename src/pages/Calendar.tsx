import "../styles/calendar.scss";
import MainCalendar from "../components/MainCalendar";
import StatusBar from "../components/StatusBar";
import SideBar from "../components/SideBar_Calendar";

// 캘린더
export default function Calendar() {
  return (
    <div className="body">
      <StatusBar />
      <main className="main">
        <MainCalendar />
        <SideBar />
      </main>
    </div>
  );
}
