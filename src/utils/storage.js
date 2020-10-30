export default function addToDo (todo) {

    let existingToDo = null;
    console.log(todo);

    try {
        existingToDo = JSON.parse(localStorage.getItem("todo")) || [];
    } catch (error){
        console.error(error);
        existingToDo = [];
    } 

    if (!existingToDo.includes(todo)) {
        const newToDo =  [...existingToDo, todo];
        localStorage.setItem("todo", JSON.stringify(newToDo));
        return newToDo;
    }

    return existingToDo;
}