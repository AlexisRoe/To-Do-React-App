import getData from './getData';
import makeDate from "./makeDate";

export default function addToDo(todo) {
    let existingToDo = getData('todo');

    const mixedData = `${todo}≠${makeDate()}`;

    if (!existingToDo.includes(todo)) {
        const newToDo = [...existingToDo, mixedData];
        localStorage.setItem('todo', JSON.stringify(newToDo));
        return newToDo;
    }

    return existingToDo;
}
