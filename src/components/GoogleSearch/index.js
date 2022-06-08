import { Component } from "react"
import './index.css'
import SuggestionItem from '../SuggestionItem'

const intialSuggestionList = [
    {id: 1, suggestion: 'Price of Ethereum'},
    {id: 2, suggestion: 'Oculus Quest 2 specs'},
    {id: 3, suggestion: 'Tesla Share Price'},
    {id: 4, suggestion: 'Price of Ethereum today'},
    {id: 5, suggestion: 'Latest trends in AI'},
    {id: 6, suggestion: 'Latest trends in ML'},
]



class GoogleSearch extends Component{
    state = {suggestionlist:intialSuggestionList,
        // issearchinputclicked:false,
        issearchinputclicked:true,
        searchinput:"",
    }

    onBlurOfSearchInput = () => {
        this.setState({issearchinputclicked:false})
    }

    onChangeOfSearchInput = event =>{
        this.setState({searchinput:event.target.value,issearchinputclicked:true})
    }

    onClickOfSearchInput = () =>{
        this.setState({issearchinputclicked:true})

    }

    selectInputItem = value =>{
        this.setState({searchinput:value})
    }

    render(){
        const {suggestionlist,issearchinputclicked,searchinput} = this.state

        const filteredSuggestionsList = suggestionlist.filter(eachSuggestion =>(
            eachSuggestion.suggestion.toLowerCase().includes(searchinput.toLowerCase())
        ))
        return(
            <div className="app-container">
                <div className="logo-search-input-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" className="google-logo-img"/>
                    <div className="search-input-suggestions-container">
                        <div className="search-input-container">
                            <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search-icon" className="search-icon"/>
                            <input 
                            type="search" 
                            className="search-input" 
                            placeholder="Search Google or type a URL" 
                            // onBlur={this.onBlurOfSearchInput} 
                            onChange={this.onChangeOfSearchInput}
                            onClick={this.onClickOfSearchInput}
                            value={searchinput}
                            />
                        </div>
                        {issearchinputclicked && <ul>
                            {filteredSuggestionsList.map(eachSuggestion =>(<SuggestionItem 
                            suggestionDetails={eachSuggestion} 
                            key={eachSuggestion.id} 
                            selectInputItem={this.selectInputItem}
                            />))}
                        </ul>}
                    </div>  
                </div>
            </div>
        )
    }
    
}

export default GoogleSearch