export default function getData(dataField){
    let storageData = null;

    try {
        storageData = JSON.parse(localStorage.getItem(dataField)) || [];
      } catch (error) {
        console.error(error);
        storageData = [];
      }

    return storageData;
}