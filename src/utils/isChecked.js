import getData from "./getData";

export default function isChecked(todo) {
  return getData("checked").includes(todo) ? '[X]' : '[ ]';
}
