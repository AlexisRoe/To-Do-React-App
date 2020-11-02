import getData from "./getData";

export default function AddCheck(todo) {
  let checkedItems = getData("checked");
  let updatedItems = [...checkedItems, todo];
  localStorage.setItem("checked", JSON.stringify(updatedItems));
  return updatedItems;
}
