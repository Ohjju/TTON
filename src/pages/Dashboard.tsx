import "../styles/global.scss";
import { useState } from "react";
import Header from "../components/Header";
import "../styles/dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faSquareCheck,
  faClipboard,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

// 메인 대시보드
export default function Dashboard() {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());
  const dashboard = true;

  let todayOn = new Date(2023, 10, 13, 8, 45, 20).toLocaleTimeString();
  let todayOff = new Date(2023, 10, 13, 18, 0, 40).toLocaleTimeString();
  let diff = Math.abs(
    new Date(2023, 10, 13, 18, 0, 40).getTime() -
      new Date(2023, 10, 13, 8, 45, 20).getTime()
  );
  let timeDiff = Math.floor(diff / (60 * 60 * 1000));
  let minDiff = Math.floor((diff / (60 * 60 * 1000) - timeDiff) * 60);
  let secDiff = Math.floor(
    ((diff / (60 * 60 * 1000) - timeDiff) * 60 - minDiff) * 60
  );
  return (
    <>
      <Header dashboard={dashboard} />
      <div className="dashboardContainer">
        <div className="sideMenu">
          <Link to="/" className="gotoHome">
            <FontAwesomeIcon icon={faHouse} className="gotoHomeIcon" />
          </Link>
          <Link to="/board" className="gotoBoard">
            <FontAwesomeIcon icon={faClipboard} className="gotoBoardIcon" />
          </Link>
          <Link to="/calender" className="gotoCalendar">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="gotoCalendarIcon"
            />
          </Link>
          <Link to="/todo" className="gotoTodo">
            <FontAwesomeIcon icon={faSquareCheck} className="gotoTodoIcon" />
          </Link>

          <FontAwesomeIcon icon={faEnvelope} className="gotoEmailIcon" />
        </div>
        <div className="myPage">
          <div className="myPicture blueShadow"></div>
          <div className="officeState">
            <div className="on">출근</div>
            <div className="off">퇴근</div>
          </div>
          <div className="myInfo">
            <div className="myName">정과장</div>
            <div className="myPhone">
              <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
              010-1234-5678
            </div>
            <div className="myEmail">
              <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
              qwerty@naver.com
            </div>
          </div>
          <div className="myWorkTime">
            <div className="onTimeContainer">
              출근 시간 :<div className="onTime">{todayOn.toString()}</div>
            </div>

            <div className="offTimeContainer">
              퇴근 시간 :<div className="offTime">{todayOff.toString()}</div>
            </div>
            <div className="workingTimeContainer">
              근무 시간 :
              <div className="workingTime">
                {(timeDiff - 1).toString() +
                  "시간 " +
                  minDiff.toString() +
                  "분 " +
                  secDiff.toString() +
                  "초"}
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="up">
            <div className="dashboardCalendar ">
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="dashboardMemoContainer">
              <div className="dashboardMemo">메모 </div>
              <textarea
                className="memo"
                placeholder="간단한 메모를 작성할 수 있습니다."
                spellCheck={false}
                onKeyDown={(e) => {
                  // 테스크 블럭 추가
                  if (e.key === "Enter") {
                    // 엔터하면 input 포커스 해제
                    (document.activeElement as HTMLElement).blur();
                  }
                }}
              ></textarea>
            </div>
          </div>
          <div className="down">
            <div className="dashboardTodoContainer">
              <div className="dashboardTodo">할 일</div>
              <div className="dashboardTodoBox">
                <div className="dashboardTodoState"></div>
                <div className="dashboardTodoContent">
                  <div className="dashboardTodoTitle">디자인 틀 잡기</div>
                  <div className="dashboardTodoDate">9.22 ~ 10.11</div>
                </div>
              </div>
              <div className="dashboardTodoBox ">
                <div className="dashboardTodoState"></div>
                <div className="dashboardTodoContent">
                  <div className="dashboardTodoTitle">코드 작성하기</div>
                  <div className="dashboardTodoDate">9.27 ~ 10.12</div>
                </div>
              </div>
              <div className="dashboardTodoBox ">
                <div className="dashboardTodoState"></div>
                <div className="dashboardTodoContent">
                  <div className="dashboardTodoTitle">ppt 완성하기</div>
                  <div className="dashboardTodoDate">10.11 ~ 10.12</div>
                </div>
              </div>
            </div>
            <div className="dashboardScheduleContainer ">
              <div className="dashboardSchedule">예정된 회의</div>
              <div className="dashboarddashboardScheduleBox ">
                <div className="dashboardScheduleContent">
                  <div className="scheduleTitle">팀프로젝트 중간 회의</div>
                  <div className="scheduleDate">10/10 오전 11시 30분</div>
                </div>
              </div>
              <div className="dashboarddashboardScheduleBox ">
                <div className="dashboardScheduleContent">
                  <div className="scheduleTitle">팀프로젝트 중간 회의</div>
                  <div className="scheduleDate">10/10 오전 11시 30분</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
