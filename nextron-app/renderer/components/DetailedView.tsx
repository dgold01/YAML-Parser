import { useEffect, useState } from 'react'
import { getImage } from '../localAPIService/localAPIService'
import styles from './DetailedView.module.css'

interface DetailedViewProps {
    fileData: any
}

export default function DetailedView(props: DetailedViewProps) {
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        const fetchImage = async () => {
            const imageURL = await getImage(props.fileData.imageFileName.innerHTML)
            console.log(imageURL)
            setImageURL(imageURL as any)
        }
        if (props.fileData.imageFileName) fetchImage()

    }, [])
    return (
        <div className= {styles.container}>
            <div className = {styles.popup}>
                <div className={styles.fileText}>
                    {props.fileData && (
                        <div className= {styles.title} dangerouslySetInnerHTML={{ __html: props.fileData.title.innerHTML }} />
                    )}
                    {props.fileData.text && (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: props.fileData.text.innerHTML }} />
                        </>
                    )}
                    {props.fileData.imageFileName && <img className= {styles.image} src = {imageURL} alt="Your Image" />}
                </div>
            </div>
        </div>
    )
}

