import getData from "./getData";

export default function checkedToDo(todo) {
  let checkedItems = getData("checked");
  let updatedItems = null;
  !checkedItems.includes(todo)
    ? (updatedItems = [...checkedItems, todo])
    : (updatedItems = checkedItems.filter((item) => item !== todo));

  localStorage.setItem("checked", JSON.stringify(updatedItems));
  return updatedItems;
}
