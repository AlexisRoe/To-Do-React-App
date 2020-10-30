export default function isChecked(todo) {
  let checkedItems = null;
  let check = false;
  try {
    checkedItems = JSON.parse(localStorage.getItem("checked")) || [];
  } catch (error) {
    console.error(error);
    checkedItems = [];
  }

  checkedItems.includes(todo) ? (check = true) : (check = false);
  return check;
}
