export const ChangeDoingColor = (inputcolor: any, doingId: any): void => {
  // .todobox가 가장 첫번째 생성된 할일에만 적용됨 => querySelector 때문에
  // 그래서 각 box에 id부여해서 스타일 적용하기
  const current = document.getElementById(String("doing_" + doingId))
    ?.lastChild as HTMLInputElement;
  current.style.background = `linear-gradient(90deg, var(${inputcolor}) 12px, #ffffff 12px)`;
};
