import './DetailedView.css'


export default function DetailedView({ fileData, setShowDetail }) {

    return (
        <div className="container">
            <div className="pop-up">
                <h1>Detail View</h1>
                <div>
                    <h1>{fileData.text}</h1>
                </div>
            </div>
            <button onClick={() => { setShowDetail(false) }} >X</button>
        </div>
    )
}

