import axios from 'axios'

export async function getFileData() {
  try {
    const response = await fetch(`http://localhost:5000/files`, {
      method: "GET"
    })
    const data = await response.json();
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
      // Lets axios know to process the response data as an ArrayBuffer object, allowing us to work with the raw binary data
      responseType: 'arraybuffer',
    });
    // Creates an array of 8-bit unsigned integers from the ArrayBuffer
    // Reduce function is used here to iterate over each byte in the array and calls String.fromCharCode(byte) to convert 
    // it into its corresponding string character. The strings are accumulated into a single string
    // The string is then converted into a base64-encoded string using btoa()
    // The result is appended to 'data:image/jpeg;base64,' to form a complete data URI
    const image = 'data:image/jpeg;base64,' + btoa(
      new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return image;
  } catch (error) {
    console.error(error);
  }
}



