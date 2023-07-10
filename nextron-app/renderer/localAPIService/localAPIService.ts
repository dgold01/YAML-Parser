import axios from 'axios'

export async function getFileData() {
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



//Had to switch to axios here since fetch kept giving CORS erros no matter what I changed
export async function getImage(filename: any) {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/image',
      data: {
        filename: filename,
      },
      responseType: 'arraybuffer',
    });

    const image = 'data:image/jpeg;base64,' + btoa(
      new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    return image;
  } catch (error) {
    console.error(error);
  }
}



