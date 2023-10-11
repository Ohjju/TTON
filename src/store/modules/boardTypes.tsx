export type profileImg = {
  src: string;
};

export type boardItem = {
  boardID: number;
  content: string;
  writer: string;
  isDeleted: boolean;
  nextID?: number;
};

export interface nextID {
  nextID: number;
}

export type BOARDLIST = {
  boardList: Array<boardItem>;
};
