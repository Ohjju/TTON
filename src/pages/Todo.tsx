import "../styles/global.scss";
import "../styles/todo.scss";
import TodoBox from "../components/TodoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import TodoSide from "../components/TodoSide";

// todo 목록
export default function Todo() {
  const TodoID = useRef<number>(2);
  const DoingID = useRef<number>(2);
  const DoneID = useRef<number>(0);
  // todo 목록
  const [inputTodo, setInputTodo] = useState<any>([
    {
      id: 0,
      To: (
        <TodoBox
          statecolor="--status-green"
          background="#ffffff"
          todoTitle="ppt 만들기"
          todoStartDate="2023/10/11"
          todoEndDate="2023/10/12"
          todoContent="피그마로 만들고 pdf 추출하기"
          todoColor="--select-green"
          todoId="0"
        />
      ),
    },
    {
      id: 1,
      To: (
        <TodoBox
          statecolor="--status-green"
          background="#ffffff"
          todoTitle="강의 듣기"
          todoStartDate="2023/10/15"
          todoEndDate="2023/10/30"
          todoContent="강의 계획 먼저 세우고 듣기"
          todoColor="--select-pink"
          todoId="1"
        />
      ),
    },
  ]);

  // doing 목록
  const [inputDoing, setInputDoing] = useState<any>([
    {
      id: 0,
      To: (
        <TodoBox
          statecolor="--status-yellow"
          background="#ffffff"
          todoTitle="디자인 틀 잡기"
          todoStartDate="2023/9/22"
          todoEndDate="2023/10/11"
          todoColor="--select-brown"
          doingId="0"
        />
      ),
    },
    {
      id: 1,
      To: (
        <TodoBox
          statecolor="--status-yellow"
          background="#ffffff"
          todoTitle="코드 작성"
          todoStartDate="2023/9/27"
          todoEndDate="2023/10/12"
          todoContent="타입스크립트 사용하기"
          todoColor="--select-brown"
          doingId="1"
        />
      ),
    },
  ]);

  // done 목록
  const [inputDone, setInputDone] = useState<any>([
    {
      id: 0,
      To: (
        <TodoBox
          statecolor="--status-gray"
          background="#f5f5f5"
          todoTitle="프로젝트 기획"
          todoStartDate="2023/9/22"
          todoEndDate="2023/9/26"
          todoContent="서비스 목표, 이름 정하기"
          todoColor="--select-gray"
          doneId="0"
        />
      ),
    },
  ]);

  // todo 추가
  function addTodo() {
    const newTodo = {
      id: TodoID.current, // id 값은 변수로 넣어줌
      To: (
        <TodoBox
          statecolor="--status-green"
          background="#ffffff"
          todoId={TodoID.current}
        />
      ),
    };
    setInputTodo([...inputTodo, newTodo]); // 새로운 인풋객체 추가
    TodoID.current += 1; // id값은 1씩 늘려줌
  }

  // todo마다 id 부여
  // id=1부터 시작, 0은 제일 마지막
  // var todoCount = 1;
  // function addTodoId() {
  //   // querySelector 때문에 첫번째에만 적용됨
  //   const itemNew = document.querySelector(".test");
  //   var next = itemNew;
  //   while (next) {
  //     next?.setAttribute("id", "item_" + todoCount);
  //     todoCount = todoCount + 1;
  //     next = next?.nextElementSibling;
  //   }
  // }

  // doing 추가
  function addDoing() {
    const newDoing = {
      id: DoingID.current,
      To: (
        <TodoBox
          statecolor="--status-yellow"
          background="#ffffff"
          doingId={DoingID.current}
        />
      ),
    };
    setInputDoing([...inputDoing, newDoing]);
    DoingID.current += 1;
  }

  // Done 추가
  function addDone() {
    const newDone = {
      id: DoneID.current,
      To: (
        <TodoBox
          statecolor="--status-gray"
          background="#f5f5f5"
          doneId={DoneID.current}
        />
      ),
    };
    setInputDone([...inputDone, newDone]);
    DoneID.current += 1;
  }

  return (
    <>
      <header className="header">
        <FontAwesomeIcon className="hamburger" icon={faBars} />
        <div className="logo"></div>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header>
      <div className="todoContainer ">
        <div className="left">
          <div className="miniCalendar shadow"></div>
          <div className="whiteBox shadow">
            <TodoSide />
          </div>
        </div>
        <div className="right">
          <div className="todoGroup">
            <div className="todoGroupingBox">
              <div className="todo shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">해야할 일</div>
                  <div className="count">{inputTodo.length}</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  onClick={() => {
                    addTodo();
                  }}
                />
              </div>

              <div className="doing shadow">
                <div style={{ display: "flex" }}>
                  <div className="state"></div>
                  <div className="title">진행 중</div>
                  <div className="count">{inputDoing.length}</div>
                </div>
                <FontAwesomeIcon
                  className="addTodo"
                  icon={faPlus}
                  style={{ color: "d9d9d9", fontSize: "2.5rem" }}
                  onClick={() => {
                    addDoing();
                  }}
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
                  onClick={() => {
                    addDone();
                  }}
                />
              </div>
            </div>
            <div className="todoGroupBox">
              <div className="todo">
                {inputTodo &&
                  inputTodo.map((item: any, index: any) => {
                    return (
                      <>
                        <div
                          id={String("item_" + item.id)}
                          className="test"
                          key={index}
                        >
                          {item.To}
                          {/* 얘가 업데이트 안됨 - 처음 상태 유지 */}
                        </div>
                      </>
                    );
                  })}
              </div>

              <div className="doing">
                {inputDoing &&
                  inputDoing.map((item: any, index: any) => {
                    return (
                      <>
                        <div
                          id={String("doing_" + item.id)}
                          className="test1"
                          key={index}
                        >
                          {item.To}
                        </div>
                      </>
                    );
                  })}
              </div>

              <div className="done">
                {inputDone &&
                  inputDone.map((item: any, index: any) => {
                    return (
                      <>
                        <div
                          id={String("done_" + item.id)}
                          className="test2"
                          key={index}
                        >
                          {item.To}
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
