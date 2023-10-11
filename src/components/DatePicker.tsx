import DatePicker from "react-datepicker";
import { useState, useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/dataPicker.scss";

interface IProps {
  startDate: any;
  setStartDate: Dispatch<SetStateAction<any>>;
  endDate: any;
  setEndDate: Dispatch<SetStateAction<any>>;
}

const CustomDatePicker = (props: IProps) => {
  // const CustomDatePicker = () => {
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();

  const _ = require("lodash");

  // 월 선택 select box에 보여질 데이터
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  return (
    <div className="custom-react-datepicker__wrapper">
      {/* 시작 날짜를 지정하는 데이트 피커 */}
      <DatePicker
        renderCustomHeader={({
          date,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="custom-react-datepicker__select-wrapper">
            {/* 이전 월로 이동하는 버튼 */}
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ fontSize: "1rem" }}
                onClick={() => {
                  console.log(props.setStartDate);
                  console.log(props.startDate);
                }}
              />
            </button>

            <div className="custom-react-datepicker__select-item">
              {/* 월 선택 select box */}
              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  lineHeight: "1.7rem",
                  color: "var(--text-black-60)",
                  marginRight: "0.4rem",
                  marginLeft: "0",
                  height: "100%",
                }}
              >
                월
              </span>
            </div>
            {/* 다음 월로 이동하는 버튼 */}
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ fontSize: "1rem" }}
              />
            </button>
          </div>
        )}
        dateFormat="yy.MM.dd" // 선택된 날짜를 input box에 나타내는 형식
        selected={new Date(props.startDate)}
        onChange={(date) => props.setStartDate(date)} // 선택한 날짜를 state에 저장
        selectsStart
        startDate={new Date(props.startDate)}
        endDate={new Date(props.endDate)}
      />

      <span className="custom-react-datepicker__split-span">~</span>
      {/* 종료 날짜를 지정하는 데이트 피커 */}
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="custom-react-datepicker__select-wrapper">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ fontSize: "1rem" }}
              />
            </button>

            <div className="custom-react-datepicker__select-item">
              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  lineHeight: "1.7rem",
                  color: "var(--text-black-60)",
                  marginRight: "0.4rem",
                  marginLeft: "0",
                  height: "100%",
                }}
              >
                월
              </span>
            </div>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ fontSize: "1rem" }}
              />
            </button>
          </div>
        )}
        // value=""
        dateFormat="yy.MM.dd"
        selected={new Date(props.endDate)}
        onChange={(date) => props.setEndDate(date)}
        selectsEnd
        startDate={new Date(props.startDate)}
        endDate={new Date(props.endDate)}
        minDate={new Date(props.startDate)}
      />
    </div>
  );
};

export default CustomDatePicker;
