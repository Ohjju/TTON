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
  const [events, setEvents] = useState<Array<EventApi>>([]);
  const [initialEvents, setInitialEvents] = useState([
    {
      id: String(10001),
      title: "Merhaba Dunyq",
      start: new Date().toISOString().split("T")[0],
    },
    {
      id: String(20002),
      title: "Merhaba Dunyq 2",
      start: new Date().toISOString().split("T")[0] + "T14:05:00",
    },
  ]);

  useEffect(() => {
    console.log("eventler", events);
  }, [events]);

  const handleEvents = (events: EventApi[]) => {
    setEvents(events);
  };

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <b>{eventInfo.event.title}</b>
      </>
    );
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    alert(`${clickInfo.event.title}을 취소하시겠습니까?`);
    console.log(clickInfo.event.id);
    clickInfo.event.remove();
  };
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("일정을 추가해주세요");
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
