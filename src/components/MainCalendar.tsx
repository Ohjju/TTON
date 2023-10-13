import "../styles/mainCalendar.scss";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  DateClickArg,
  EventDragStartArg,
  EventDragStopArg,
} from "@fullcalendar/interaction"; // needed for dayClick
import allLocales from "@fullcalendar/core/locales-all";
import {
  EventContentArg,
  EventClickArg,
  DateSelectArg,
  EventApi,
  EventAddArg,
  EventRemoveArg,
} from "@fullcalendar/core";

let id = 0;

// function DetailModal() {
//   return (
//     <div className="modal" style={{ backgroundColor: "red" }}>
//       <input title="text" value="title" onChange={onChange} />
//       <button>확인</button>
//       <button>취소</button>
//     </div>
//   );
// }

function MainCalendar() {
  const [view, setView] = useState(false);
  // 이벤트 저장되는 배열 선언
  const [events, setEvents] = useState<Array<EventApi>>([]);
  // 초기 이벤트 선언
  const [initialEvents, setInitialEvents] = useState([
    {
      id: String(10001),
      title: "기술 블로그 작성하기",
      start: new Date().toISOString().split("T")[0],
    },
    {
      id: String(20002),
      title: "책 읽기",
      start: new Date().toISOString().split("T")[0] + "T14:05:00",
    },
  ]);

  // 선언된 이벤트 배열 알려주는 함수
  useEffect(() => {
    console.log("eventler", events);
  }, [events]);

  // events 변수에 작성한 값을 넣어주는 함수
  const handleEvents = (events: EventApi[]) => {
    setEvents(events);
  };

  // 화면 상으로 배열 내보내주는 함수
  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <p>{eventInfo.timeText}</p>
        <p>{eventInfo.event.title}</p>
      </>
    );
  };

  // 배열 클릭시 삭제해주는 함수
  const handleEventClick = (clickInfo: EventClickArg) => {
    alert(`${clickInfo.event.title}을 취소하시겠습니까?`);
    console.log(clickInfo.event.id);
    clickInfo.event.remove();
  };

  // 날짜 창 클릭 시 추가해주는 함수
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    //모달창 구현
    // const ModalComponent = (props) => {
    //   const { title } = props;

    //   const [modal, setModal] = useState(false);

    //   const toggle = () => setModal(!modal);
    //   const alertshow = () => {
    //     alert("button clicked");
    //   };

    //   const closeBtn = (
    //     <button className="close" onClick={toggle}>
    //       &times;
    //     </button>
    //   );

    //   return <div></div>;
    // };
    let title = prompt("일정을 추가해주세요");
    // {modal? }
    let calenderApi = selectInfo.view.calendar;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: String(id++),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  return (
    <div className="mainCalendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        // customButtons={{
        //   btn: {
        //     text: "Button",
        //     click(ev: MouseEvent, element: HTMLElement) {
        //       alert("클릭");
        //     },
        //   },
        // }}
        dateClick={(e: DateClickArg) => {
          console.log("dateclick", e);
        }}
        select={handleDateSelect}
        eventClick={handleEventClick}
        initialEvents={initialEvents}
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,next today", // 이전년도, 다음년도, 오늘로 이동
        }}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        eventDragStart={(e: EventDragStartArg) => {
          console.log("Start Drag!!");
        }}
        eventDragStop={(e: EventDragStopArg) => {
          console.log("Stop Drag!!");
        }}
        eventBackgroundColor={"#C2C1FD"}
        eventBorderColor={"transparent"}
        eventRemove={(e: EventRemoveArg) => {
          console.log("event remove");
        }}
        eventsSet={handleEvents}
        eventAdd={(e: EventAddArg) => {
          console.log("here!!!", e);
        }}
        eventChange={(e: EventAddArg) => {
          console.log("event change!", e);
        }}
        dayMaxEvents={true}
        weekends={true}
        locales={allLocales}
        locale={"ko"}
        buttonText={{
          today: "오늘",
        }}
        height={710}
      />
    </div>
  );
}

export default MainCalendar;
