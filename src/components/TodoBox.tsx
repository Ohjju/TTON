import "../styles/todoBox.scss";
import "../styles/todoDropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import TodoDropdown from "./TodoDropdown";
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoBox(props: any) {
  // array는 할일들 담겨있는 배열 의미(inputTodo)
  const {
    statecolor,
    background,
    todoTitle,
    todoStartDate,
    todoEndDate,
    todoContent,
    todoColor,
    todoId,
    doingId,
    doneId,
  } = props;

  // dropdown 관련변수
  const [view, setView] = useState(false);

  // react에서 useref 사용
  const title = useRef<HTMLInputElement>(null);

  // 랜덤 색 선택
  const colors = [
    "--select-pink",
    "--select-green",
    "--select-gray",
    "--select-brown",
  ];
  const states = ["--status-green", "--status-yellow", "--status-gray"];

  // const randomValue = colors[Math.floor(Math.random() * colors.length)];
  // // 위처럼 작성하면 색이 자꾸 바뀜 -> 한번 결정된 색은 새로고침 안되도록 수정
  // useEffect((): any => {
  //   const randomValue = colors[Math.floor(Math.random() * colors.length)];
  //   // 첫번째로 생기는 todo에만 적용되고 있음 -> 수정!
  //   const randomColor = document.querySelector(".todoBox") as HTMLInputElement;
  //   randomColor.style.background = `linear-gradient(90deg, var(${randomValue}) 12px, ${background} 12px)`;
  // }, []);

  // 날짜 선택
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  // 색상 랜덤 값 - 한번 생성된 것은 저장하기 위해 useRef 사용
  const randomValue = useRef(colors[Math.floor(Math.random() * colors.length)]);

  return (
    <>
      {/* dropdown 메뉴 */}
      {view && (
        <TodoDropdown
          boxColor={colors}
          stateColor={states}
          todoId={todoId}
          doingId={doingId}
          doneId={doneId}
        />
      )}

      <div
        className="todoBox shadow"
        style={{
          background: `linear-gradient(90deg, var(${
            todoColor ? todoColor : randomValue.current
          }) 12px, ${background} 12px)`,
        }}
      >
        <div className="todoContent">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "1.6rem",
            }}
          >
            <div
              className="todoState"
              style={{ backgroundColor: `var(${statecolor})` }}
            ></div>
            <FontAwesomeIcon
              className="setTodo"
              icon={faEllipsisVertical}
              style={{ color: "d9d9d9", fontSize: "2.5rem" }}
              onClick={() => {
                setView(!view);
              }}
            />
          </div>
          <div className="todoInput">
            <input
              value={todoTitle}
              className="todoTitle"
              placeholder="할일을 입력하세요"
              type="text"
              ref={title}
              spellCheck={false}
              onKeyDown={(e) => {
                // 테스크 블럭 추가
                if (e.key === "Enter") {
                  //입력받은 title => inputTitle
                  const inputTitle = title.current?.value;
                  // 엔터하면 input 포커스 해제
                  (document.activeElement as HTMLElement).blur();
                }
              }}
            ></input>
          </div>

          <div className="todoDate">
            <DatePicker
              startDate={todoStartDate ? todoStartDate : startDate}
              setStartDate={setStartDate}
              endDate={todoEndDate ? todoEndDate : endDate}
              setEndDate={setEndDate}
            />
          </div>

          <div className="todoMemo">
            <textarea
              value={todoContent}
              className="todoMemo"
              placeholder="내용을 입력하세요"
              spellCheck={false}
              onKeyDown={(e) => {
                // 테스크 블럭 추가
                if (e.key === "Enter") {
                  // 엔터하면 input 포커스 해제
                  (document.activeElement as HTMLElement).blur();

                  //입력받은 memo => inputMemo
                  const inputMemo = (
                    document.querySelector(".todoMemo") as HTMLInputElement
                  ).value;
                }
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
