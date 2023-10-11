import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/menuAddDoing.scss";
import { useState, useRef } from "react";

export default function MenuAddDoing(props: any) {
  const { doingName } = props;
  const [view, setView] = useState<boolean | null>(true);
  const [num, setNum] = useState<any>(0);

  const test: any = {};
  for (let i = 0; i < 10; i++) {
    test[`test${i}`] = i;
    console.log(test[0]);
  }

  //  똑같은 클래스 이름이어서 문제!
  return (
    <div className="sideDoing">
      <div style={{ display: "flex" }}>
        <div className="doingCheckbox">
          <FontAwesomeIcon icon={faSquareCheck} />
        </div>
        <div className="doingName">{doingName}</div>
      </div>
      <div className="doingStar">
        <FontAwesomeIcon
          icon={faStar}
          onClick={() => {
            setView(!view);
            {
              view &&
                document
                  .querySelector(".doingStar")
                  ?.classList.add("important");
              setNum(num + 1);
            }
            {
              !view &&
                document
                  .querySelector(".doingStar")
                  ?.classList.remove("important");
            }
          }}
        />
      </div>
    </div>
  );
}
