import "../styles/global.scss";
import "../styles/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// 게시판
export default function Login() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loginContainer">
        <div className="loginLogo"></div>
        <div className="loginId">
          <FontAwesomeIcon icon={faUser} className="idIcon" />
          <input
            className="inputId"
            type="text"
            placeholder="아이디"
            spellCheck={false}
          />
        </div>
        <div className="loginPassword">
          <FontAwesomeIcon icon={faLock} className="passwordIcon" />
          <input
            className="inputPassword"
            type="text"
            placeholder="비밀번호"
            spellCheck={false}
          />
        </div>

        <Link to="/dashboard" className="loginBtn">
          <div className="login">로그인</div>
        </Link>

        <div className="find">비밀번호 찾기 | 아이디 찾기 | 회원가입</div>
      </div>
    </div>
  );
}
