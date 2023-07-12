import { useEffect, useState } from "react";
import { getFileData } from "../localAPIService/localAPIService";
import DetailedView from './DetailedView'
import styles from './Dashboard.module.css'

export interface FileData {
    title: HTMLDivElement;
    text: HTMLDivElement;
    imageFileName?: HTMLDivElement;
  }
  
export default function Dashboard() {
    const [fileData, setFileData] = useState<FileData[]>([]);
    const [showDetail, setShowDetail] = useState(false)
    const [selectedFile, setSelectedFile] = useState<null | FileData>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFileData()
            //Here we loop through each YAML object in the array, and assign the value for eah key to a new htmlElement
            //This is so the client recognises the HTML tags that were created in the backend. 
            //We update each key value with the new htmlElement and set the state of the fileData to this updated data
            for (let file of data) {
                for (let [key, value] of Object.entries(file)) {
                    // Creates a new HTMLDivElement and assign it to the current file[key]
                    let htmlElement = document.createElement('div');
                    htmlElement.innerHTML = value as string;
                    file[key] = htmlElement
                }
            }
            setFileData(data)
        }
        fetchData()
    }, [])


    function handleTitleClick(item: FileData) {
        setSelectedFile(item)
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
                            //Renders the title of the file by setting the innerHTML of the div element to the HTML content of item.title.innerHTML
                            <div dangerouslySetInnerHTML={{ __html: item.title.innerHTML}} />
                        )}</a>
                    </li>
                ))}
            </div>
            {showDetail && <DetailedView fileData={selectedFile} ></DetailedView>}
        </div>

    )
}

