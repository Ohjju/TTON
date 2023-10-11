import "../styles/global.scss";
import "../styles/todoSide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faSquareCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import MenuAddImportant from "./MenuAddImportant";
import "../styles/menuAddDoing.scss";
import "../styles/menuAddTodo.scss";

export default function TodoSide() {
  const [todoRotate, setTodoRotate] = useState<boolean | null>(false);
  const [doingRotate, setDoingRotate] = useState<boolean | null>(false);
  const [importRotate, setImportRotate] = useState<boolean | null>(false);

  // dropdown 보이게 하는 변수
  const [viewTodo, setViewTodo] = useState<boolean | null>(false);
  const [viewDoing, setViewDoing] = useState<boolean | null>(false);
  const [viewImportant, setViewImportant] = useState<boolean | null>(false);
  const [viewTodo1, setViewTodo1] = useState<boolean | null>(true);
  const [viewTodo2, setViewTodo2] = useState<boolean | null>(true);
  const [viewDoing1, setViewDoing1] = useState<boolean | null>(true);
  const [viewDoing2, setViewDoing2] = useState<boolean | null>(true);

  const todoName1 = String(document.querySelector(".todoName1")?.textContent);
  const todoName2 = String(document.querySelector(".todoName2")?.textContent);
  const doingName1 = String(document.querySelector(".doingName1")?.textContent);
  const doingName2 = String(document.querySelector(".doingName2")?.textContent);

  return (
    <>
      {/* 해야할 일 sideMenu */}
      <div className="menu1">
        <div className="menuTodo">해야할 일</div>
        <FontAwesomeIcon
          className={`todoIcon ${todoRotate ? "open" : ""}`}
          icon={faChevronRight}
          style={{
            color: "var(--text-black-40)",
          }}
          onClick={() => {
            setTodoRotate(!todoRotate);
            setViewTodo(!viewTodo);
          }}
        />
      </div>
      {/* dropdown 메뉴*/}
      {/* {viewTodo && <MenuAddTodo />} */}
      {viewTodo && (
        <div className="sideTodoContainer">
          <div className="sideTodo">
            <div style={{ display: "flex" }}>
              <div className="todoCheckbox">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div className="todoName1">ppt 만들기</div>
            </div>
            <div id="todoStar0">
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setViewTodo1(!viewTodo1);
                  {
                    viewTodo1 &&
                      document
                        .getElementById("todoStar0")
                        ?.classList.add("important");
                  }
                  {
                    !viewTodo1 &&
                      document
                        .getElementById("todoStar0")
                        ?.classList.remove("important");
                  }
                }}
              />
            </div>
          </div>

          <div className="sideTodo">
            <div style={{ display: "flex" }}>
              <div className="todoCheckbox">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div className="todoName2">강의 듣기</div>
            </div>
            <div id="todoStar1">
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setViewTodo2(!viewTodo2);
                  {
                    viewTodo2 &&
                      document
                        .getElementById("todoStar1")
                        ?.classList.add("important");
                  }
                  {
                    !viewTodo2 &&
                      document
                        .getElementById("todoStar1")
                        ?.classList.remove("important");
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
      <hr
        style={{
          height: "0.1rem",
          backgroundColor: ` var(--text-black-20)`,
          border: "0",
          margin: "0",
        }}
      />

      {/* 진행 중 sideMenu */}
      <div className="menu2">
        <div className="menuDoing">진행 중</div>
        <FontAwesomeIcon
          // 삼항연산자 이용해 class 추가
          className={`doingIcon ${doingRotate ? "open" : ""}`}
          icon={faChevronRight}
          style={{ color: "var(--text-black-40)" }}
          onClick={() => {
            setDoingRotate(!doingRotate);
            setViewDoing(!viewDoing);
          }}
        />
      </div>
      {/* dropdown 메뉴*/}
      {/* {viewDoing && <MenuAddDoing />} */}
      {viewDoing && (
        <div className="sideContainer">
          <div className="sideDoing">
            <div style={{ display: "flex" }}>
              <div className="doingCheckbox">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div className="doingName1">디자인 틀 잡기</div>
            </div>
            <div id="doingStar0">
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setViewDoing1(!viewDoing1);
                  {
                    viewDoing1 &&
                      document
                        .getElementById("doingStar0")
                        ?.classList.add("important");
                  }
                  {
                    !viewDoing1 &&
                      document
                        .getElementById("doingStar0")
                        ?.classList.remove("important");
                  }
                }}
              />
            </div>
          </div>

          <div className="sideDoing">
            <div style={{ display: "flex" }}>
              <div className="doingCheckbox">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div className="doingName2">코드 작성하기</div>
            </div>
            <div id="doingStar1">
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setViewDoing2(!viewDoing2);
                  {
                    viewDoing2 &&
                      document
                        .getElementById("doingStar1")
                        ?.classList.add("important");
                  }
                  {
                    !viewDoing2 &&
                      document
                        .getElementById("doingStar1")
                        ?.classList.remove("important");
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      <hr
        style={{
          height: "0.1rem",
          backgroundColor: `var(--text-black-20)`,
          border: "0",
          margin: "0",
        }}
      />
      <div className="menu3">
        <div className="menuImportant">중요</div>
        <FontAwesomeIcon
          className={`importIcon ${importRotate ? "open" : ""}`}
          icon={faChevronRight}
          style={{ color: "var(--text-black-40)" }}
          onClick={() => {
            setImportRotate(!importRotate);
            setViewImportant(!viewImportant);
          }}
        />
      </div>

      {/* dropdown 메뉴*/}
      <div className="dropDownImport">
        {viewImportant && !viewTodo1 && (
          <MenuAddImportant name={todoName1} state="--status-green" />
        )}
        {viewImportant && !viewTodo2 && (
          <MenuAddImportant name={todoName2} state="--status-green" />
        )}
        {viewImportant && !viewDoing1 && (
          <MenuAddImportant name={doingName1} state="--status-yellow" />
        )}
        {viewImportant && !viewDoing2 && (
          <MenuAddImportant name={doingName2} state="--status-yellow" />
        )}
      </div>
    </>
  );
}
