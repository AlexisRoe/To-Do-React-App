export default function removeToDo(todo) {
    let checkedItems = null;
    let toDos = null;
    let deletedToDos = null;

    try {
        checkedItems = JSON.parse(localStorage.getItem('checked')) || [];
        toDos = JSON.parse(localStorage.getItem('todo')) || [];
        deletedToDos = JSON.parse(localStorage.getItem('deleted')) || [];
    } catch (error) {
        console.error(error);
        checkedItems = [];
        toDos = [];
        deletedToDos = [];
    }

    let updatedChecked = null;
    checkedItems.includes(todo) && (updatedChecked = checkedItems.filter((item) => item !== todo));
    localStorage.setItem('checked', JSON.stringify(updatedChecked));
    
    let updatedToDos = null;
    toDos.includes(todo) && (updatedToDos = toDos.filter((item) => item !== todo));
    localStorage.setItem('todo', JSON.stringify(updatedToDos));

    deletedToDos.push(todo);
    localStorage.setItem('deleted', JSON.stringify(deletedToDos));
}
