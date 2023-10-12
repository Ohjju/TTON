export const DeleteDoing = (count: any): void => {
  const current = document.getElementById(String("doing_" + count))
    ?.lastChild as HTMLInputElement;
  const currentTodoDrop = document.querySelector(
    ".dropContainer"
  ) as HTMLInputElement;
  current.remove();
  currentTodoDrop.remove();
};
