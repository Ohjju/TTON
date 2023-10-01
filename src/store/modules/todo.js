const initialState = {
  list: [
    {
      id: 0,
      title: "할일1",
      date: "data",
      content: "content",
      boxcolor: "boxcolor",
      statecolor: "statecolor",
    },
    {
      id: 1,
      title: "할일2",
      date: "data",
      content: "content",
      boxcolor: "boxcolor",
      statecolor: "statecolor",
    },
  ],
};

//id 전역관리를 위한 initialState.nextID
let count = initialState.list.length;
initialState["nextID"] = count;

//action 타입 정의
const TODO = "todo/TODO";
const DOING = "todo/DOING";
const DONE = "todo/DONE";

export function todo(payload) {
  return {
    type: TODO,
    payload, //object형
  };
}

export function doing(id) {
  return {
    type: DOING,
    payload, //object형
  };
}

export function done(id) {
  return {
    type: DONE,
    payload, //object형
  };
}

/*
action ={
  type: 'todo/CREATE',
  payload: {
    id:3,
    text:'할일',
    date,
    content,
    boxcolor,
    statecolor,
  }
}
*/

export default function create(state = initialState, action) {
  switch (action.type) {
    case TODO:
      // trim(): 공백제거
      if (action.payload.title.trim() === "") {
        return state;
      } else {
        return {
          ...state,
          list: state.list.concat({
            id: action.payload.id,
            text: action.payload.title,
          }),
          nextID: action.payload.id + 1,
        };
      }

    case DOING:
      return {};

    case DONE:
      return {};
  }
}
