import './index.css'

const HistoryItem = props =>{
    const {historyDetails} = props
    const {timeAccessed,logoUrl,title,domainUrl} = historyDetails
    return(
        <li className="history-list-item">
            <div className='history-item-content-container'>
                <p className='time-accessed'>{timeAccessed}</p>
                <img src={logoUrl} alt="history item" className='history-item-img'/>
                <a href={domainUrl} className="history-item-title">{title}</a>
                <p className='domain-url-el'>{domainUrl}</p>
            </div>
            <div>
                <button className='delete-btn'><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete"/></button>
            </div>
            
        </li>
    )
}

export default HistoryItem