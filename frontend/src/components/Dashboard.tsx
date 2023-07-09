import { useEffect, useState } from "react";
import { getFileData } from "@/localAPIService";
import DetailedView from './DetailedView'
import './Dashboard.css'
export default function Dashboard() {
    const [fileData, setFileData] = useState([]);
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
        <div className="dashboardContainer" >
            <div className="listContainer">
                <h1>YAML Files:</h1>
                {fileData && fileData.map((item, index) => (
                    <li key={index}>
                        <a className="title-button" onClick={() => { handleTitleClick(item) }}> {fileData && (
                            <div dangerouslySetInnerHTML={{ __html: item.title.innerHTML }} />
                        )}</a>
                    </li>
                ))}
            </div>
            {showDetail && <DetailedView fileData={selectedFile} setShowDetail={setShowDetail}></DetailedView>}
        </div>

    )
}

