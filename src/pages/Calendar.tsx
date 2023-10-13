import "../styles/calendar.scss";
import MainCalendar from "../components/MainCalendar";
import Header from "../components/Header";
import SideBar from "../components/SideBar_Calendar";

// 캘린더
export default function Calendar() {
  return (
    <div className="body">
      <Header gotoCalendar="--main-color-30" />
      <main className="main">
        <MainCalendar />
        <SideBar />
      </main>
    </div>
  );
}
