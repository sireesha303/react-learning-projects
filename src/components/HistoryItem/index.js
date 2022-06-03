import './index.css'

const HistoryItem = props =>{
    const {historyDetails} = props
    const {timeAccessed,logoUrl,title,domainUrl} = historyDetails
    return(
        <li className="history-list-item">
            <p className='time-accessed'>{timeAccessed}</p>
            <img src={logoUrl} alt="history item" className='history-item-img'/>
            <a href={domainUrl} className="history-item-title">{title}</a>
            <p className='domain-url-el'>{domainUrl}</p>
            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete"/>
        </li>
    )
}

export default HistoryItem