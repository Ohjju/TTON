import "../styles/global.scss";

export default function SideBar() {
  return (
    <>
      <nav className="side-bar">
        <div className="mini-cal">
          <div className="mini-cal-head">
            <h4>9월</h4>
          </div>
          <div className="mini-cal-main"></div>
        </div>
        <div className="mini-list">
          <p>새싹상사</p>
        </div>
      </nav>
    </>
  );
}
