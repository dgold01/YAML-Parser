import { useEffect, useState } from "react";
import { getFileData } from "../localAPIService/localAPIService";
import DetailedView from './DetailedView'
import styles from './Dashboard.module.css'
export default function Dashboard() {
    const [fileData, setFileData] =  useState<any[]>([])
    const [showDetail, setShowDetail] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getFileData()
            
            for (let file of data) {
                for (let [key, value] of Object.entries(file)) {
                    console.log(file)
                    let htmlElement = document.createElement('div');
                    htmlElement.innerHTML = value as any;
                    file[key] = htmlElement
                }
            }
            console.log(data)
            setFileData(data as any)
        }
        fetchData()
    }, [])





    function handleTitleClick(item: any) {
        setSelectedFile(item)
        // setShowDetail(!showDetail)
        setShowDetail(true)
    }
    return (
        <div className={styles.dashboardContainer} >
            <div className={styles.listContainer}>
                <h1>YAML Files:</h1>
                <h6 className={styles.subHeading}>Select from list</h6>
                {fileData && fileData.map((item, index) => (
                    <li key={index}>
                        <a className= {styles.titleButton} onClick={() => { handleTitleClick(item) }}> {fileData && (
                            <div dangerouslySetInnerHTML={{ __html: item.title.innerHTML}} />
                        )}</a>
                    </li>
                ))}
            </div>
            {showDetail && <DetailedView fileData={selectedFile} ></DetailedView>}
        </div>

    )
}

