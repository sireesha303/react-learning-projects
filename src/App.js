import './App.css';
import {Component} from 'react'
import BrowserHistory from './components/BrowserHistory'
import Authentication from './components/Authentication'

const listOfProjects = {
  initial:'INITIAL',
  browserhistory:'BROWSERHISTORY',
  authentication:'AUTHENTICATION',

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


  render(){
    const {currentProject} = this.state


    switch(currentProject){
      case listOfProjects.initial:
        return(
          <div className='list-of-projects-container'>
            <h1>My Learning Projects</h1>
            <button onClick={this.onClickBrowserHistory}>Browser History</button>
            <button onClick={this.onClickAuthentication}>Authentication</button>
          </div>
        )
      case listOfProjects.browserhistory:
        return <BrowserHistory />
      case listOfProjects.authentication:
        return <Authentication />
      default:
        return null
    }
    

  }
}

export default App;
