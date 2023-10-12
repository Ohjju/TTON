import React, { useState } from "react";
import "../styles/global.scss";
import MiniCalendar from "../components/MiniCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div>
      <nav className="side-bar">
        <MiniCalendar />
        <div className="mini-list">
          <div className="mini-list-header">
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
            }}
          />
          <div className="mini-list-content">
            <h6>일정</h6>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: 10, color: "var(--text-black-30)" }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
