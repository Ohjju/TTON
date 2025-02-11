import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeRipple } from "../store/modules/rippleReducer";
import { PropsTypeRipple } from "../components/BoardContent";

export default function InputRipple({ currentBoardID }: PropsTypeRipple) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();
  const nextRippleID = useSelector(
    (state: any) => state.rippleReducer.nextRippleID
  );

  //엔터 하면 게시글 등록
  function handleRippleContent() {
    dispatch(
      writeRipple({
        rippleID: nextRippleID,
        boardID: currentBoardID,
        rippleContent: (inputRef.current as any).value,
        profileImg: "/img/jeong_user.png",
        rippleWriter: "정과장",
        isDeleted: false,
      })
    );

    (inputRef.current as any).value = null;
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleRippleContent();
    }
  };

  return (
    <>
      <div className="input-ripple">
        <textarea
          rows={5}
          placeholder="댓글 남기기"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="submit-area">
          <button type="button" className="file-upload-btn">
            <p>
              <i
                className="fa-solid fa-paperclip"
                style={{ color: "#ffffff" }}
              ></i>
            </p>
          </button>
          <button
            onClick={() => {
              handleRippleContent();
            }}
          >
            <p>등록</p>
          </button>
        </div>
      </div>
    </>
  );
}
