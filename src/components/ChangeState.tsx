// TodoDropdown에서 state(입력받은 stateColor) 받아와서 TodoBoX style 변경
export const ChangeState = (inputstate: any, count: any): void => {
  const current = document.getElementById(String("item_" + count))
    ?.lastChild as HTMLInputElement;
  current.style.background = `linear-gradient(90deg, var(${inputstate}) 12px, #ffffff 12px)`;
};
