import {useEffect, useState} from "react";
import getFileData from "@/localAPIService";

export default function Dashboard (){
    const [fileData, setFileData] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getFileData()
            console
            setFileData(data)
        }
        fetchData()
    },[])
    
    return(
        <div>
            {fileData  && fileData.map((item,index)=>(
                <li key = {index}>
                    <h1>{item.text}</h1>
                </li>
            ))}
        </div>
    )
}

