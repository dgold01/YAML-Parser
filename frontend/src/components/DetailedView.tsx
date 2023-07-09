import { useEffect, useState } from 'react'
import { getImage } from '../localAPIService'
import './DetailedView.css'


export default function DetailedView({ fileData, setShowDetail }) {
    const [imageURL, setImageURL] = useState(null)
    useEffect(() => {
        const fetchImage = async () => {
            const imageURL = await getImage(fileData.imageFileName)
            console.log(imageURL)
            setImageURL(imageURL as any)
        }
        if (fileData.imageFileName) fetchImage()

    }, [])
    return (
        <div className="container">
            <h1>Detail View</h1>
            <div className="pop-up">
                <div className='fileText'>
                    <h1>Title: {fileData.title}</h1>
                    <h2>Text: {fileData.text}</h2>
                    {fileData['In general'] && <h2>In general: {fileData['In general']}</h2>}
                    {fileData.imageFileName && <img src= {imageURL} alt="Your Image" />}
                </div>
            </div>
            {/* <button onClick={() => { setShowDetail(false) }} >X</button> */}
        </div>
    )
}

