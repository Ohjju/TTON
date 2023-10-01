export default function InputContent() {
  return (
    <>
      <div className="input-content">
        <textarea rows={5} placeholder="메시지 보내기"></textarea>
        <div className="submit-area">
          {/* <input type="button" /> */}
          <button type="button">
            <p>+</p>
          </button>
          <button>
            <p>등록</p>
          </button>
        </div>
      </div>
    </>
  );
}
