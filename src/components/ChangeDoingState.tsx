export const ChangeDoingState = (inputstate: any, todoId: any): void => {
  const current = document.getElementById(String("doing_" + todoId))
    ?.children[1].children[0].children[0].children[0] as HTMLInputElement;
  current.style.backgroundColor = `var(${inputstate})`;
};
