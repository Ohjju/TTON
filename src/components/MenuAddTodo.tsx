import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddTodo.scss";
import { useState, useRef } from "react";

export default function MenuAddTodo(props: any) {
  const { name1, name2 } = props;
  const [viewTodo, setViewTodo] = useState<boolean | null>(true);
  return (
    <div className="sideTodoContainer">
      <div className="sideTodo">
        <div style={{ display: "flex" }}>
          <div className="todoCheckbox">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <div className="todoName1">디자인 틀 완성하기</div>
        </div>
        <div id="todoStar0">
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => {
              setViewTodo(!viewTodo);
              {
                viewTodo &&
                  document
                    .getElementById("todoStar0")
                    ?.classList.add("important");
              }
              {
                !viewTodo &&
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
          <div className="todoName2">ppt 만들기</div>
        </div>
        <div id="todoStar1">
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => {
              setViewTodo(!viewTodo);
              {
                viewTodo &&
                  document
                    .getElementById("todoStar1")
                    ?.classList.add("important");
              }
              {
                !viewTodo &&
                  document
                    .getElementById("todoStar1")
                    ?.classList.remove("important");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
