export const ChangeDoneState = (inputstate: any, todoId: any): void => {
  const current = document.getElementById(String("done_" + todoId))?.children[1]
    .children[0].children[0].children[0] as HTMLInputElement;
  current.style.backgroundColor = `var(${inputstate})`;
};
