export const DeleteDone = (count: any): void => {
  const current = document.getElementById(String("done_" + count))
    ?.lastChild as HTMLInputElement;
  const currentTodoDrop = document.querySelector(
    ".dropContainer"
  ) as HTMLInputElement;
  current.remove();
  currentTodoDrop.remove();
};
