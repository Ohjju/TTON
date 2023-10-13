import { PropsType } from "../components/BoardContent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContent,
  checkContent,
  unCheckContent,
} from "../store/modules/boardReducer";
import { rippleItem } from "../store/modules/rippleTypes";

const moreIcon = require("../assets/img/more.png");

export default function BoardDetail({
  isShow,
  setIsShow,
  currentBoardID,
  setCurrentBoardID,
  content,
  isChecked,
  checkedCnt,
  profileImg,
  writer,
}: PropsType) {
  const [isModalShow, setIsModalShow] = useState(false);
  const [rippleCnt, setRippleCnt] = useState(false);
  const dispatch = useDispatch();

  //현재 게시글 ID 기준으로 댓글 가져오기
  const rippleList = useSelector((state: any) => state.rippleReducer.list);
  const rippleFilteredList = rippleList.filter(
    (el: rippleItem) => el.boardID === currentBoardID && el.isDeleted === false
  );

  useEffect(() => {
    setRippleCnt(rippleFilteredList.length);
  });

  function unCheckedHandle() {
    dispatch(unCheckContent({ currentBoardID }));
  }

  function checkedHandle() {
    dispatch(checkContent({ currentBoardID }));
  }

  return (
    <>
      <article className="article-detail">
        <div className="content-area">
          <div className="user-profile">
            <img
              src={process.env.PUBLIC_URL + profileImg}
              alt="사용자 프로필"
            />
          </div>
          <div className="user-content">
            <div className="content-detail">
              <h6>{writer}</h6>
              <p
                className="content-side"
                onClick={() => {
                  setIsShow(!isShow);
                  setCurrentBoardID(currentBoardID);
                }}
              >
                {content}
              </p>
            </div>
            <div className="content-check">
              <div className="check-status">
                {isChecked === false ? (
                  <>
                    <i
                      className="fa-solid fa-square-check"
                      style={{ color: "#d9d9d9" }}
                      onClick={() => {
                        checkedHandle();
                      }}
                    ></i>
                    {checkedCnt > 0 && <p>{checkedCnt}</p>}
                  </>
                ) : (
                  <>
                    <i
                      className="fa-solid fa-square-check"
                      style={{ color: "#81caff" }}
                      onClick={() => {
                        unCheckedHandle();
                      }}
                    ></i>
                    <p>{checkedCnt}</p>
                  </>
                )}
              </div>
              <div
                className="ripple-status content-side"
                onClick={() => {
                  setIsShow(!isShow);
                  setCurrentBoardID(currentBoardID);
                }}
              >
                <i
                  className="fa-solid fa-comment"
                  style={{ color: "#81caff" }}
                ></i>
                <p>{rippleCnt}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="more"
          onClick={() => {
            setIsModalShow(!isModalShow);
          }}
        >
          <img src={moreIcon} alt="더보기" />
        </div>
        {isModalShow === true && (
          <span className="more-modal">
            <ul>
              <li>
                <p>게시글 수정</p>
              </li>
              <li
                onClick={() =>
                  window.confirm("삭제 하시겠습니까?") === true &&
                  dispatch(deleteContent({ currentBoardID }))
                }
              >
                <p>게시글 삭제</p>
              </li>
              <li>
                <p>링크 복사</p>
              </li>
            </ul>
          </span>
        )}
      </article>
    </>
  );
}
