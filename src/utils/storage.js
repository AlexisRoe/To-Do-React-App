import getData from './getData';

export default function addToDo(todo) {
    let existingToDo = getData('todo');

    if (!existingToDo.includes(todo)) {
        const newToDo = [...existingToDo, todo];
        localStorage.setItem('todo', JSON.stringify(newToDo));
        return newToDo;
    }

    return existingToDo;
}
