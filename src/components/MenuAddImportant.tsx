import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddImportant.scss";
import { useState, useRef, useEffect } from "react";

export default function MenuAddImportant(props: any) {
  const { name, state } = props;
  const [important, setImportant] = useState<any>([]);
  const ImportID = useRef<number>(0);

  // const a = document.querySelector(".important")?.innerHTML;
  const a = document.querySelector(".important")?.textContent;
  // const a = document.querySelector(".doingName")?.textContent;

  useEffect(() => {
    const newImportant = {
      id: ImportID.current, // id 값은 변수로 넣어줌
      To: (
        <div className="sideImportant">
          <div style={{ display: "flex" }}>
            <div
              className="importantCheckbox"
              style={{ color: `var(${state})` }}
            >
              <FontAwesomeIcon icon={faSquareCheck} />
            </div>
            <div className="importantName">{name}</div>
          </div>
        </div>
      ),
    };
    setImportant([newImportant, ...important]); // 새로운 인풋객체 추가
    ImportID.current += 1; // id값은 1씩 늘려줌
  }, []);

  return (
    <div className="sideImportContainer">
      {important &&
        important.map((item: any, index: any) => {
          return (
            <>
              <div
                key={index}
                onClick={() => {
                  console.log(item);
                }}
              >
                {item.To}
              </div>
            </>
          );
        })}
    </div>
  );
}
