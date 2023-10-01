import "../styles/global.scss";
import "../styles/todo.scss";
import TodoBox from "../components/TodoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFile } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// todo 목록
export default function Todo() {
  const nextID = useRef<number>(1);
  const [inputTodo, setInputTodo] = useState([
    {
      id: 0,
      To: <></>,
      // 나중에 고치기(불필요한 태그 생성됨)
    },
  ]);

  // react에서 useref 사용?
  const input = useRef<HTMLInputElement>(null);

  // todo 추가
  function addTodo() {
    const newTodo = {
      id: nextID.current, // id 값은 변수로 넣어줌
      To: (
        // icon이랑 input창이랑 가로 정렬 위해 묶어줌
        <div className="inputStyle">
          <FontAwesomeIcon icon={faFile} className="inputIcon" />
          <input
            type="text"
            ref={input}
            className="todoInput"
            placeholder="할일을 입력하세요"
            spellCheck={false}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // 테스크 블럭 추가 완료
                //입력받은 값 저장
                const inputValue = input.current?.value;
                document.querySelector(".inputIcon")?.remove();
                // 엔터하면 input 포커스 해제
                (document.activeElement as HTMLElement).blur();
              }
            }}
          ></input>
        </div>
      ),
    };
    setInputTodo([...inputTodo, newTodo]); // 기존 값에 새로운 인풋객체를 추가
    nextID.current += 1; // id값은 1씩 늘려줌
  }

  // todoBox 색
  const color = [
    "--select-gray",
    " --select-pink",
    "--select-green",
    "--select-brown",
  ];

  // todolist 실습
  // const addTodo = () => {
  //   dispatch(create({ id: nextId, text: input.current.value }));
  //   input.current.value = "";
  // };

  return (
    <>
      <header className="header"></header>
      <div className="todoContainer">
        <div className="left">
          <div className="miniCalendar shadow"></div>
          <div className="whiteBox shadow"></div>
        </div>
        <div className="right">
          <div className="todoGroup">
            <div className="todoGroupingBox">
              <div className="todo shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">해야할 일</div>
                  <div className="count">5</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  // 클릭하면 input창 생김
                  onClick={addTodo}
                />
              </div>

              <div className="doing shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">진행 중</div>
                  <div className="count">5</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                />
              </div>
              <div className="done shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">완료</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                />
              </div>
            </div>
            <div className="todoGroupBox">
              <div className="todo">
                {inputTodo.map((e, index) => {
                  return (
                    <div key={index}>
                      <div>{e.To}</div>
                    </div>
                  );
                })}

                <TodoBox
                  title="디자인 틀 완성하기"
                  date="09.28 ~ 10.20"
                  content="내용내요내용내용내요내요"
                  boxcolor="--select-pink"
                  statecolor="--status-green"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 10.20"
                  content="content"
                  boxcolor="--select-gray"
                  statecolor="--status-green"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-green"
                  statecolor="--status-green"
                />

                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-brown"
                  statecolor="--status-green"
                />
              </div>
              <div className="doing">
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-green"
                  statecolor="--status-yellow"
                />
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-brown"
                  statecolor="--status-yellow"
                />
              </div>
              <div className="done">
                <TodoBox
                  title="코드 작성하기"
                  date="09.28 ~ 11.30"
                  content="content"
                  boxcolor="--select-gray"
                  statecolor="--status-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
