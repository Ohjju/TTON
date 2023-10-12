import Calendar from "react-calendar";
import "../styles/miniCalendar.css";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MiniCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <Calendar
        value={value}
        onChange={onChange}
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        } // "일" 보이지 않게 설정
        next2Label={null} // 다음 커서
        prev2Label={null} // 이전 커서
        showNeighboringMonth={false} // 지난 날짜 보이지 않게 설정
      />
    </>
  );
}
