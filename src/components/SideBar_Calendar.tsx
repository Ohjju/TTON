import React, { useState } from "react";
import "../styles/global.scss";
import MiniCalendar from "../components/MiniCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const fullCheckbox = require("../assets/img/fullCheckbox.png");
const emptyCheckbox = require("../assets/img/emptyCheckbox.png");

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="side-bar">
        <MiniCalendar />
        <div className="mini-list">
          <div className="mini-list-add">
            <h6>일정 추가하기</h6>
            <FontAwesomeIcon
              icon={faPlus}
              style={{ fontSize: 20, color: "var(--text-black-30)" }}
            />
          </div>
          <hr
            style={{
              backgroundColor: "var(--text-black-30)",
              height: 1,
              border: 0,
              margin: 0,
            }}
          />
          <div className="mini-list-content">
            <div className="mini-list-content_header">
              <h6>일정</h6>
              <FontAwesomeIcon
                onClick={() => setIsOpen(!isOpen)}
                icon={isOpen ? faChevronDown : faChevronLeft}
                style={{ fontSize: 10, color: "var(--text-black-30)" }}
              />
            </div>
            <div className="mini-list-content_content">
              {isOpen && (
                <ul>
                  <li>
                    <img src={fullCheckbox} alt={fullCheckbox} />
                    <p>기술 블로그 작성하기</p>
                  </li>
                  <li>
                    <img src={emptyCheckbox} alt={emptyCheckbox} />
                    <p>책 읽기</p>
                  </li>
                </ul>
              )}
            </div>
            <hr
              style={{
                backgroundColor: "var(--text-black-30)",
                height: 1,
                border: 0,
                margin: 0,
              }}
            />
            <div className="mini-list-content_header">
              <h6>중요 일정</h6>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ fontSize: 10, color: "var(--text-black-30)" }}
              />
            </div>
            <hr
              style={{
                backgroundColor: "var(--text-black-30)",
                height: 1,
                border: 0,
              }}
            />
            <div className="mini-list-content_header">
              <h6>공유된 일정</h6>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ fontSize: 10, color: "var(--text-black-30)" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
