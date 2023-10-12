export const DeleteTodo = (count: any): void => {
  const current = document.getElementById(String("item_" + count))
    ?.lastChild as HTMLInputElement;
  const currentTodoDrop = document.querySelector(
    ".dropContainer"
  ) as HTMLInputElement;
  current.remove();
  currentTodoDrop.remove();
  // document.getElementById("count")?.textContent;
  console.log(document.querySelector(".count")?.firstChild?.nodeValue);
};
