import { combineReducers } from "redux";
import { boardReducer } from "./modules/boardReducer";

export default combineReducers({
  boardReducer,
});

// useSelector로 스토어에 접근할 때 필요하다!
export type RootState = ReturnType<typeof combineReducers>;
