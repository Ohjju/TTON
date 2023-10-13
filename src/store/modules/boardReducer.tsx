import * as type from "./boardTypes";

export const WRITE = "board/WRITE" as const;
export const UPDATE = "board/UPDATE" as const;
export const DELETE = "board/DELETE" as const;
export const CHECK = "board/CHECK" as const;
export const UNCHECK = "board/UNCHECK" as const;

export function writeContent(payload: type.boardItem) {
  return {
    type: WRITE,
    payload,
  };
}

export function updateContent(payload: type.boardItem) {
  return {
    type: UPDATE,
    payload,
  };
}

export function deleteContent(payload: type.boardIDType) {
  return {
    type: DELETE,
    payload,
  };
}

export function checkContent(payload: type.boardIDType) {
  return {
    type: CHECK,
    payload,
  };
}

export function unCheckContent(payload: type.boardIDType) {
  return {
    type: UNCHECK,
    payload,
  };
}

type boardAction =
  | ReturnType<typeof writeContent>
  | ReturnType<typeof updateContent>
  | ReturnType<typeof deleteContent>
  | ReturnType<typeof checkContent>
  | ReturnType<typeof unCheckContent>;

type boardStateType = {
  list: type.boardItem[];
};

const initialState = {
  list: [
    {
      boardID: 0,
      content:
        "가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다",
      writer: "정과장",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 3,
      profileImg: "/img/jeong_user.png",
    },
    {
      boardID: 1,
      content: "오늘까지 업무 모두 끝내도록 하세요!!!!",
      writer: "한부장",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 2,
      profileImg: "/img/han_user.png",
    },
    {
      boardID: 2,
      content: "어제 부장님께 요청드렸던 건을 확인 되었나요?",
      writer: "김대리",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 10,
      profileImg: "/img/kim_user.png",
    },
    {
      boardID: 3,
      content: "프로젝트 마무리 부탁드립니다 :))",
      writer: "오사원",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 0,
      profileImg: "/img/oh_user.png",
    },
    {
      boardID: 4,
      content: "다들 마지막까지 좀만 더 화이팅합시다!!",
      writer: "오사원",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 0,
      profileImg: "/img/oh_user.png",
    },
  ],
  nextID: 0,
};

let contentCount = initialState.list.length;
initialState.nextID = contentCount;

export function boardReducer(
  state: boardStateType = initialState,
  action: boardAction
) {
  switch (action.type) {
    case WRITE:
      return {
        ...state,
        list: state.list.concat({
          boardID: action.payload.boardID,
          writer: action.payload.writer,
          content: action.payload.content,
          isDeleted: false,
          isChecked: false,
          checkedCnt: 0,
          profileImg: action.payload.profileImg,
        }),
        nextID: action.payload.boardID + 1,
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.boardID === action.payload.boardID) {
            return {
              ...el,
              content: action.payload.content,
            };
          } else {
            return el;
          }
        }),
      };
    case DELETE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.boardID === action.payload.currentBoardID) {
            return {
              ...el,
              isDeleted: true,
            };
          } else {
            return el;
          }
        }),
      };
    case CHECK:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.boardID === action.payload.currentBoardID) {
            return {
              ...el,
              isChecked: true,
              checkedCnt: el.checkedCnt + 1,
            };
          } else {
            return el;
          }
        }),
      };
    case UNCHECK:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.boardID === action.payload.currentBoardID) {
            return {
              ...el,
              isChecked: false,
              checkedCnt: el.checkedCnt - 1,
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
