import * as type from "./rippleTypes";

export const WRITE = "ripple/WRITE" as const;
export const UPDATE = "ripple/UPDATE" as const;
export const DELETE = "ripple/DELETE" as const;

export function writeRipple(payload: type.rippleItem) {
  return {
    type: WRITE,
    payload,
  };
}

export function updateRipple(payload: type.rippleItem) {
  return {
    type: UPDATE,
    payload,
  };
}

export function deleteRipple(payload: type.rippleCurrentID) {
  return {
    type: DELETE,
    payload,
  };
}

type rippleAction =
  | ReturnType<typeof writeRipple>
  | ReturnType<typeof updateRipple>
  | ReturnType<typeof deleteRipple>;

type rippleStateType = {
  list: type.rippleItem[];
};

const initialState = {
  list: [
    {
      rippleID: 0,
      boardID: 0,
      rippleContent: "과장님, 좋은 말씀 감사드립니다~!~!!!!!!",
      rippleWriter: "오사원",
      isDeleted: false,
      profileImg: "/img/oh_user.png",
    },
    {
      rippleID: 1,
      boardID: 0,
      rippleContent: "도전! 또 도전하겠습니다!",
      rippleWriter: "김대리",
      isDeleted: false,
      profileImg: "/img/kim_user.png",
    },
    {
      rippleID: 2,
      boardID: 1,
      rippleContent: "내일까지 아니었나요?",
      rippleWriter: "정과장",
      isDeleted: false,
      profileImg: "/img/jeong_user.png",
    },
    {
      rippleID: 3,
      boardID: 1,
      rippleContent: "오후 5시 전까지 보내드리겠습니다 :))))",
      rippleWriter: "김대리",
      isDeleted: false,
      profileImg: "/img/kim_user.png",
    },
    {
      rippleID: 4,
      boardID: 2,
      rippleContent: "메일 확인해주세요.",
      rippleWriter: "한부장",
      isDeleted: false,
      profileImg: "/img/han_user.png",
    },
    {
      rippleID: 5,
      boardID: 3,
      rippleContent: "화이팅~~~~~!!!",
      rippleWriter: "오사원",
      isDeleted: false,
      profileImg: "/img/oh_user.png",
    },
    {
      rippleID: 5,
      boardID: 4,
      rippleContent: "고생 하세요 😀😀",
      rippleWriter: "정과장",
      isDeleted: false,
      profileImg: "/img/jeong_user.png",
    },
    {
      rippleID: 6,
      boardID: 5,
      rippleContent:
        "오후 3시 새싹 회의실입니다.... 어제 미리 말씀드렸을텐데요...!",
      rippleWriter: "정과장",
      isDeleted: false,
      profileImg: "/img/jeong_user.png",
    },
  ],
  nextRippleID: 0,
};

let contentCount = initialState.list.length;
initialState.nextRippleID = contentCount;

export function rippleReducer(
  state: rippleStateType = initialState,
  action: rippleAction
) {
  switch (action.type) {
    case WRITE:
      return {
        ...state,
        list: state.list.concat({
          rippleID: action.payload.rippleID,
          boardID: action.payload.boardID,
          rippleWriter: action.payload.rippleWriter,
          rippleContent: action.payload.rippleContent,
          isDeleted: false,
          profileImg: action.payload.profileImg,
        }),
        nextRippleID: action.payload.rippleID + 1,
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.rippleID === action.payload.rippleID) {
            return {
              ...el,
              rippleContent: action.payload.rippleContent,
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
          if (el.rippleID === action.payload.rippleCurrentID) {
            return {
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
