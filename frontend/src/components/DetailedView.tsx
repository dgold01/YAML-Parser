import { useEffect, useState } from 'react'
import { getImage } from '../localAPIService'
import './DetailedView.css'


export default function DetailedView({ fileData, setShowDetail }) {
    const [imageURL, setImageURL] = useState(null)
    const [htmlObject, setHtmlObject] = useState(null)

    const parser = new DOMParser();
    useEffect(() => {
        const fetchImage = async () => {
            const imageURL = await getImage(fileData.imageFileName.innerHTML)
            console.log(imageURL)
            setImageURL(imageURL as any)
        }
        if (fileData.imageFileName) fetchImage()
        console.log(fileData)
    }, [])
    return (
        <div className="container">
            <h1>Detail View</h1>
            <div className="pop-up">
                <div className='fileText'>
                    {fileData && (
                        <div className='title' dangerouslySetInnerHTML={{ __html: fileData.title.innerHTML }} />
                    )}
                     {fileData.text && (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: fileData.text.innerHTML }} />
                        </>
                    )}

                    {fileData.imageFileName && <img src={imageURL} alt="Your Image" />}
                </div>
            </div>
            {/* <button onClick={() => { setShowDetail(false) }} >X</button> */}
        </div>
    )
}

