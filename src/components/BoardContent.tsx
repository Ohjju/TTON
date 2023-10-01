import "../styles/board.scss";
import { useState, SetStateAction } from "react";
import BoardDetail from "../components/BoardDetail";
import InputContent from "../components/InputContent";
import BoardSideDetail from "../components/BoardSideDetail";
import InputRipple from "../components/InputRipple";

export interface PropsType {
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
  isShow: boolean;
}

export default function BoardContent() {
  const [isShow, setIsShow] = useState(false);

  console.log(isShow);
  // const handleShow = (value: boolean) => {
  //   setIsShow(!value);
  // };

  return (
    <>
      <section className="board-main">
        <div className="board-head">
          <h4>새싹상사</h4>
        </div>
        <div className="board-area">
          <div className="board-content">
            <div className="detail-area">
              <BoardDetail isShow={isShow} setIsShow={setIsShow} />
              <BoardDetail isShow={isShow} setIsShow={setIsShow} />
              <BoardDetail isShow={isShow} setIsShow={setIsShow} />
              <BoardDetail isShow={isShow} setIsShow={setIsShow} />
              <BoardDetail isShow={isShow} setIsShow={setIsShow} />
              <BoardDetail isShow={isShow} setIsShow={setIsShow} />
            </div>
            <div className="message-area">
              <InputContent />
            </div>
          </div>

          {isShow === true && (
            <div className="side-content">
              <div className="side-detail">
                <BoardSideDetail />
              </div>
              <div className="ripple-area">
                <InputRipple />
              </div>
            </div>
          )}

          {/* <div className="side-content">
            <div className="side-detail">
              <BoardSideDetail />
            </div>
            <div className="ripple-area">
              <InputRipple />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
