import "../styles/boardSide.scss";

export default function BoardGroupList() {
  return (
    <>
      <aside className="group-list">
        <div className="plus-board">
          <p>게시판 만들기</p>
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="view-group">
          <div className="active-group">
            <div className="board-title">
              <p>새싹상사</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="board-members isShow">
              <p>공유된 멤버</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="member-list">
              <p>
                <i className="fa-solid fa-circle"></i>&nbsp;한부장
              </p>
              <p>
                <i className="fa-solid fa-circle"></i>&nbsp;정과장
              </p>
              <p>
                <i className="fa-solid fa-circle"></i>&nbsp;김대리
              </p>
              <p>
                <i className="fa-solid fa-circle"></i>&nbsp;오사원
              </p>
            </div>
          </div>
          <div className="non-active-group">
            <div className="board-title">
              <p>무한상사</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="board-title">
              <p>티티온</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
