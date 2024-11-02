let fetchedData = [];
async function fetchingData() {
    try {
    const responce = await fetch('https://freetestapi.com/api/v1/books/1');
        const data = await responce.json();
        fetchedData = data;
    } catch (error) {
        console.log(error)
    }
    fetchedData;
}


export default fetchingData;