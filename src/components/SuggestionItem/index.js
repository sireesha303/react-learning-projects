import './index.css'

const SuggestionItem = props =>{
    const {suggestionDetails,selectInputItem} = props
    const {suggestion} = suggestionDetails

    const onClickOfArrowBtn = () =>{
        // console.log("tester on click in suggestion items");
        selectInputItem(suggestion)
    }

    return(
        <li className="suggestion-item-container">
            <p className='suggestion-text'>{suggestion}</p>
            <div>
                <button className='arrow-btn' onClick={onClickOfArrowBtn}><img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" className="arrow-img"/></button>   
            </div>
            
        </li>
    )
}

export default SuggestionItem