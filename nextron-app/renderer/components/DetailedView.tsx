import { useEffect, useState } from 'react'
import { getImage } from '../localAPIService/localAPIService'
import styles from './DetailedView.module.css'
import { FileData } from './Dashboard'


interface DetailedViewProps {
    fileData: FileData
}

export default function DetailedView(props: DetailedViewProps) {
    const [imageURL, setImageURL] = useState<string>('')

    useEffect(() => {
        const fetchImage = async () => {
            const imageURL = await getImage(props.fileData.imageFileName.innerHTML)
            setImageURL(imageURL)
        }

        // Check if the fileData.imageFileName exists before fetching the image
        if (props.fileData.imageFileName) fetchImage()

    }, [props.fileData.imageFileName])
    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <div className={styles.fileText}>
                    {props.fileData && (
                        <div className={styles.title} dangerouslySetInnerHTML={{ __html: props.fileData.title.innerHTML }} />
                    )}
                    {props.fileData.text && (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: props.fileData.text.innerHTML }} />
                        </>
                    )}
                    {/* Makes sure both the the image file name is present, and that the image URL has successfully been retrieved before trying to render the image*/}
                    {props.fileData.imageFileName && imageURL && <img className={styles.image} src={imageURL} alt="Your Image" />}
                </div>
            </div>
        </div>
    )
}

