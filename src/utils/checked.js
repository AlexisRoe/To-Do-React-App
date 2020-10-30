export default function checkedToDo(todo) {
  let checkedItems = null;

  try {
    checkedItems = JSON.parse(localStorage.getItem("checked")) || [];
  } catch (error) {
    console.error(error);
    checkedItems = [];
  }
  let updatedItems = null;
  !checkedItems.includes(todo)
    ? (updatedItems = [...checkedItems, todo])
    : (updatedItems = checkedItems.filter((item) => item !== todo));

  localStorage.setItem("checked", JSON.stringify(updatedItems));
  return updatedItems;
}
