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
        "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 – 랄프 왈도 에머슨",
      writer: "정과장",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 3,
      profileImg: "/img/jeong_user.png",
    },
    {
      boardID: 1,
      content:
        "안녕하세요~! 좋은 아침입니다 :) 오늘까지 기획서 수정에서 제출해주세요.",
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
    {
      boardID: 5,
      content: "오후 회의 장소가 어디였죠????",
      writer: "김대리",
      isDeleted: false,
      isChecked: false,
      checkedCnt: 4,
      profileImg: "/img/kim_user.png",
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
