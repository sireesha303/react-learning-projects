import './index.css'

const HistoryItem = props =>{
    const {historyDetails, deleteHistoryItem} = props
    const {timeAccessed,logoUrl,title,domainUrl,id} = historyDetails

    const onClickOfDeleteBtn = () =>(
        deleteHistoryItem(id)
    )
    return(
        <li className="history-list-item">
            <div className='history-item-content-container'>
                <p className='time-accessed'>{timeAccessed}</p>
                <img src={logoUrl} alt="history item" className='history-item-img'/>
                <a href={domainUrl} className="history-item-title">{title}</a>
                <p className='domain-url-el'>{domainUrl}</p>
            </div>
            <div>
                <button className='delete-btn' onClick={onClickOfDeleteBtn}><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete"/></button>
            </div>
            
        </li>
    )
}

export default HistoryItem