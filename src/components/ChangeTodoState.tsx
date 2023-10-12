export const ChangeTodoState = (inputstate: any, todoId: any): void => {
  // 해당 id에 해당하는 todoState의 색 바꿔줌(자식 엄청 많음..)
  const current = document.getElementById(String("item_" + todoId))?.children[1]
    .children[0].children[0].children[0] as HTMLInputElement;
  current.style.backgroundColor = `var(${inputstate})`;
};
