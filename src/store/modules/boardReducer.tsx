import * as type from "./boardTypes";

export const WRITE = "board/WRITE" as const;
export const UPDATE = "board/UPDATE" as const;
export const DELETE = "board/DELETE" as const;

// 액션을 리턴하는 거라 전부 오브젝트!
// 해당 기능은 밖에서 사용할 수 있도록 export!
export function writeContent(payload: type.boardItem) {
  // 액션은 무조건 type이 필요
  return {
    type: WRITE,
    payload, // object {id: 0, text: "운동하기", done: "false"}
  };
}

export function updateContent(payload: type.boardItem) {
  return {
    type: UPDATE,
    // boardID, // number -> 해당 게시글의 id를 보낼 예정!
    payload,
  };
}

export function deleteContent(payload: type.boardItem) {
  return {
    type: DELETE,
    payload, // number -> 해당 게시글의 id를 보낼 예정!
  };
}

type boardAction =
  | ReturnType<typeof writeContent>
  | ReturnType<typeof updateContent>
  | ReturnType<typeof deleteContent>;

// 리듀서 파라미터 중 initialState의 타입 정의
type BoardStateType = {
  list: type.boardItem[];
};

// interface IndexSignature {
//   [key: string]: number;
// }

const initialState = {
  list: [
    {
      boardID: 0,
      content: "리액트 공부하기",
      writer: "정애림",
      isDeleted: false,
    },
    {
      boardID: 1,
      content: "척추의 요정이 말합니다! 척추 펴기!",
      writer: "한정윤",
      isDeleted: false,
    },
    {
      boardID: 2,
      content: "운동하기",
      writer: "김예은",
      isDeleted: false,
    },
    {
      boardID: 3,
      content: "프로젝트 마무리 부탁드립니다 :))",
      writer: "오주현",
      isDeleted: false,
    },
  ],
  nextID: 0,
};

// id 전역 관리를 위한 initialState.nextID
// initialState.nextID 값을 count length로 하겠다??
let contentCount = initialState.list.length;

//자바스크립트 색인 동작방식에 의해 객체의 색인에 접근할 때
//내부적으로 toString()메서드를 호출하여 문자열로 변형된 값을 통해 접근한다.
// 하지만 타입스크립트는 기본적으로 객체의 프로퍼티를 읽을 때, string 타입의 key 사용을 허용하지 않는다.
// initialState["nextID"] = contentCount;

// 반드시 string literal 타입의 key로 접근하거나 객체의 타입 정의시, index signiture를 선언해야 한다.
interface StringDict {
  [index: string]: number;
}
const nextID: StringDict = {
  nextID: contentCount,
};
// initialState["hundred"] = 3000;
console.log(typeof initialState.list + " 리스트");
console.log(typeof nextID + " 넥스트");
console.log(nextID["nextID"]);
// initialState["nextID"] = contentCount;

// initialState.nextID = contentCount;

// [1,2,3].concat(4) === [1,2,3,4]
export function boardReducer(
  state: BoardStateType = initialState,
  action: boardAction
) {
  switch (action.type) {
    case WRITE:
      return {
        //기존에 있던 state(list)를 뿌려줄 것임
        ...state,
        list: state.list.concat({
          boardID: action.payload.boardID,
          writer: action.payload.writer,
          content: action.payload.content,
          isDeleted: false,
        }),
        nextID: action.payload.boardID + 1,
      };
    case UPDATE:
      // 기존의 list에서의 id와 action으로 들어온 id가 같다면 false => true
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.boardID === action.payload.boardID) {
            return {
              /*
              해당 오브젝트와 동일!! 가지고 오고 덮어준다!
              boardID: 0,
              content: 점심먹기,
              isDeleted: false,
              content: 점심먹기2222
              */
              ...el,
              content: action.payload.content,
            };
          } else {
            return el;
          }
        }),
      };
    case DELETE:
      // 기존의 list에서의 id와 action으로 들어온 id가 같다면 false => true
      return {
        ...state,
        boardList: state.list.map((el) => {
          if (el.boardID === action.payload.boardID) {
            return {
              /*
                해당 오브젝트와 동일!! 가지고 오고 덮어준다!
                boardID: 0,
                content: 점심먹기,
                writer: "한정윤",
                isDeleted: false,
                isDeleted: true
                */
              ...el,
              isDeleted: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
