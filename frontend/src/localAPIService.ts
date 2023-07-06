export default async function getFileData() {
    try {
        const response = await fetch(`http://localhost:5000/files`, {
            method: "GET"
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}