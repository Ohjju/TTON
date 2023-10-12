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
      rippleContent: "과장님, 글솜씨가 예술이십니다~!~!!!!!!",
      rippleWriter: "오사원",
      isDeleted: false,
      profileImg: "/img/oh_user.png",
    },
    {
      rippleID: 1,
      boardID: 0,
      rippleContent: "리액트 공부하기 댓글2",
      rippleWriter: "한부장",
      isDeleted: false,
      profileImg: "/img/han_user.png",
    },
    {
      rippleID: 2,
      boardID: 1,
      rippleContent: "척추의 요정이 말합니다! 척추 펴기! 댓글1",
      rippleWriter: "정과장",
      isDeleted: false,
      profileImg: "/img/jeong_user.png",
    },
    {
      rippleID: 3,
      boardID: 1,
      rippleContent: "척추의 요정이 말합니다! 척추 펴기! 댓글2",
      rippleWriter: "김대리",
      isDeleted: false,
      profileImg: "/img/kim_user.png",
    },
    {
      rippleID: 4,
      boardID: 2,
      rippleContent: "프로젝트 마무리 부탁드립니다 :)) 댓글1",
      rippleWriter: "김대리",
      isDeleted: false,
      profileImg: "/img/kim_user.png",
    },
    {
      rippleID: 5,
      boardID: 3,
      rippleContent: "호잇!!!!! 댓글1",
      rippleWriter: "오사원",
      isDeleted: false,
      profileImg: "/img/oh_user.png",
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
