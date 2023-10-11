import { PropsType } from "../components/BoardContent";
import { useDispatch, useSelector } from "react-redux";
import {
  writeContent,
  updateContent,
  deleteContent,
} from "../store/modules/boardReducer";

const moreIcon = require("../assets/img/more.png");
const userImg = require("../assets/img/user/profile.png");

// export interface PropsType2 {
//   state: object;
// }

export default function BoardDetail({ isShow, setIsShow }: PropsType) {
  const list = useSelector((state: any) => state.boardReducer.list);
  // filter는 콜백함수 들어가는 일종의 반복문
  const todoList = list.filter((el: any) => el.isDeleted === false);

  const dispatch = useDispatch();
  const nextId = useSelector((state: any) => state.boardReducer.nextID);

  return (
    <>
      <article className="article-detail">
        <div className="content-area">
          <div className="user-profile">
            <img src={userImg} alt="사용자 프로필" />
          </div>
          <div className="user-content">
            <div className="content-detail">
              <h6>닉네임</h6>
              <p className="content-side" onClick={() => setIsShow(!isShow)}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam laudantium ut officiis earum, praesentium, recusandae
                itaque ipsam obcaecati dolores commodi expedita distinctio nulla
                voluptates perspiciatis iure cum? Magni, tempora suscipit?
              </p>
            </div>
            <div className="content-check">
              <div className="check-status">
                {/* <i
                  className="fa-solid fa-square-check"
                  style={{ color: "#d9d9d9" }}
                ></i> */}
                <i
                  className="fa-solid fa-square-check"
                  style={{ color: "#81caff" }}
                ></i>
                <p>2</p>
              </div>
              <div
                className="ripple-status content-side"
                onClick={() => setIsShow(!isShow)}
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
        <div className="more">
          <img src={moreIcon} alt="더보기" />
        </div>
      </article>
    </>
  );
}
