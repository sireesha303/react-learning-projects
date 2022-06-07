
const SuggestionItem = props =>{
    const {suggestionDetails} = props
    const {id,suggestion} = suggestionDetails

    return(<p>{suggestion}</p>)
}

export default SuggestionItem