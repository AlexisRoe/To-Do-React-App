import getData from "./getData";

export default function removeToDo(todo) {
    let checkedItems = getData("checked");
    let toDos = getData("todo");
    let deletedToDos = getData("deleted");


    let updatedChecked = null;
    checkedItems.includes(todo) && (updatedChecked = checkedItems.filter((item) => item !== todo));
    localStorage.setItem('checked', JSON.stringify(updatedChecked));
    
    let updatedToDos = null;
    toDos.includes(todo) && (updatedToDos = toDos.filter((item) => item !== todo));
    localStorage.setItem('todo', JSON.stringify(updatedToDos));

    deletedToDos.push(todo);
    localStorage.setItem('deleted', JSON.stringify(deletedToDos));
}
