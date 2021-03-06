import './App.css';
import {Component} from 'react'
import BrowserHistory from './components/BrowserHistory'
import Authentication from './components/Authentication'
import GoogleSearch from './components/GoogleSearch'
import IPLDashBoard from './components/IPLDashBoard'

const listOfProjects = {
  initial:'INITIAL',
  browserhistory:'BROWSERHISTORY',
  authentication:'AUTHENTICATION',
  googlesearch:"GOOGLESEARCH",
  ipldashboard:"IPL DASHBOARD"

}


class App extends Component{
  state = {
    currentProject : listOfProjects.initial,
  }

  onClickBrowserHistory = () =>{
    this.setState({currentProject:listOfProjects.browserhistory});
  }

  onClickAuthentication = () =>{
    this.setState({currentProject:listOfProjects.authentication})
  }

  onClickOfGoogleSearch = () =>{
    this.setState({currentProject:listOfProjects.googlesearch})
  }

  onClickOfIPLDashBoard = () =>{
    this.setState({currentProject:listOfProjects.ipldashboard})
  }

  render(){
    const {currentProject} = this.state


    switch(currentProject){
      case listOfProjects.initial:
        return(
          <div className='list-of-projects-container'>
            <h1>My Learning Projects</h1>
            <button onClick={this.onClickBrowserHistory}>Browser History</button>
            <button onClick={this.onClickAuthentication}>Authentication</button>
            <button onClick={this.onClickOfGoogleSearch}>Google Search</button>
            <button onClick={this.onClickOfIPLDashBoard}>IPL DashBoard</button>
          </div>
        )
      case listOfProjects.browserhistory:
        return <BrowserHistory />
      case listOfProjects.authentication:
        return <Authentication />
      case listOfProjects.googlesearch:
        return <GoogleSearch />
      case listOfProjects.ipldashboard:
        return <IPLDashBoard />
      default:
        return null
    }
    

  }
}

export default App;
