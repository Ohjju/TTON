import { PropsType } from "../components/BoardContent";

const moreIcon = require("../assets/img/more.png");
const userImg = require("../assets/img/user/profile.png");

export default function BoardDetail({ isShow, setIsShow }: PropsType) {
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
