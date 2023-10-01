import "../styles/global.scss";

export default function StatusBar() {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <a href="/">
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-solid fa-bell" style={{ color: "#ffffff" }}></i>
            </a>
          </li>
          <li>
            <div className="profile-status"></div>
          </li>
        </ul>
      </header>
    </>
  );
}
