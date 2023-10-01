export default function InputRipple() {
  return (
    <>
      <div className="input-ripple">
        <textarea rows={5} placeholder="댓글 남기기"></textarea>
        <div className="submit-area">
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
