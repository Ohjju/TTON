export type profileImg = {
  src: string;
};

export type boardIDType = {
  currentBoardID: number;
};

export type boardItem = {
  boardID: number;
  content: string;
  writer: string;
  isDeleted: boolean;
  isChecked: boolean;
  checkedCnt: number;
  profileImg: string;
  nextID?: number;
};

export interface nextID {
  nextID: number;
}

export type BOARDLIST = {
  boardList: Array<boardItem>;
};
