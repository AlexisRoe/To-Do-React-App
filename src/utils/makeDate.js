export default function makeDate(){
    const date = new Date();
    return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)
}