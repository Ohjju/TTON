import { PropsType } from "../components/BoardContent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContent } from "../store/modules/boardReducer";

const moreIcon = require("../assets/img/more.png");

export default function BoardDetail({
  isShow,
  setIsShow,
  currentBoardID,
  setCurrentBoardID,
  content,
  checkedCnt,
  profileImg,
  writer,
}: PropsType) {
  const [isModalShow, setIsModalShow] = useState(false);
  const dispatch = useDispatch();

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
                {checkedCnt === 0 ? (
                  <i
                    className="fa-solid fa-square-check"
                    style={{ color: "#d9d9d9" }}
                  ></i>
                ) : (
                  <>
                    <i
                      className="fa-solid fa-square-check"
                      style={{ color: "#81caff" }}
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
                <p>2</p>
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
