export const ChangeDoneColor = (inputcolor: any, doingId: any): void => {
  const current = document.getElementById(String("done_" + doingId))
    ?.lastChild as HTMLInputElement;
  current.style.background = `linear-gradient(90deg, var(${inputcolor}) 12px, #f5f5f5 12px)`;
};
