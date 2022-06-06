import { Component } from "react";
import './index.css'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
     {
       id: 0,
       timeAccessed: '07:45 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
       title: 'Instagram',
       domainUrl: 'instagram.com',
     },
     {
       id: 1,
       timeAccessed: '05:45 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
       title: 'Twitter. It’s what’s happening / Twitter',
       domainUrl: 'twitter.com',
     },
     {
       id: 2,
       timeAccessed: '04:35 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
       title: 'Facebook – log in or sign up',
       domainUrl: 'facebook.com',
     },
     {
       id: 3,
       timeAccessed: '04:25 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
       title: 'LinkedIn: Log In or Sign Up',
       domainUrl: 'linkedin.com',
     },
     {
       id: 4,
       timeAccessed: '04:00 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
       title: 'Hashnode: Everything you need to start blogging as a developer!',
       domainUrl: 'hashnode.com',
     },
     {
       id: 5,
       timeAccessed: '03:25 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
       title: 'GitHub: Where the world builds software · GitHub',
       domainUrl: 'github.com',
     },
   
     {
       id: 6,
       timeAccessed: '02:45 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
       title: 'React – A JavaScript library for building user interfaces',
       domainUrl: 'reactjs.org',
     },
     {
       id: 7,
       timeAccessed: '01:25 PM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
       title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
       domainUrl: 'stackoverflow.com',
     },
   
     {
       id: 8,
       timeAccessed: '09:25 AM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
       title: 'Gmail',
       domainUrl: 'mail.google.com',
     },
     {
       id: 9,
       timeAccessed: '09:00 AM',
       logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
       title: 'Google',
       domainUrl: 'google.com',
     },
   ]
class BrowserHistory extends Component{
     state ={
          searchInput:"",
          historyItemsList :initialHistoryList,
     }

     onChangeSearchInput = event =>{
          this.setState({searchInput:event.target.value})
     }

     deleteHistoryItem = id => {
       const {historyItemsList} = this.state 
       const test = historyItemsList.filter(eachHistory =>eachHistory.id !== id)
       this.setState({historyItemsList:test})
     }

     render(){
          const {searchInput,historyItemsList} = this.state

          const filteredHistoryItems = historyItemsList.filter(eachHistory =>(eachHistory.title.toLowerCase().includes(searchInput.toLowerCase())))

          return(
              <div className="app-container">
                <div className="heading-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png " alt="history-app=logo" />
                    <div className="search-input-container">
                           <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search-img" className="search-img"/>
                           <input type="search" className="input-el" placeholder="Search History" onChange={this.onChangeSearchInput}/>    
                    </div>
                </div>
                <ul className="history-items-container"> 
                      {filteredHistoryItems.map(eachHistoryItem =>(
                          <HistoryItem 
                            key={eachHistoryItem.id} historyDetails={eachHistoryItem} deleteHistoryItem={this.deleteHistoryItem}
                          />
                      ))}
                    
                </ul>
              </div>
          )
     }
}
export default BrowserHistory