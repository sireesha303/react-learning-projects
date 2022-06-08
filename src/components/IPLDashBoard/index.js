import {Component} from 'react'
import './index.css'

import IPLTeam from '../IPLTeam'


const iplTeamList = [{
    id:"RCB",
    name:"Royal Challengers",
    teamImageUrl:"https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
},
{
    id:"KKR",
    name:"Royal Challengers testing",
    teamImageUrl:"https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png"
},
{
    id:"RCB",
    name:"Royal Challengers",
    teamImageUrl:"https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
},
{
    id:"KKR",
    name:"Royal Challengers testing",
    teamImageUrl:"https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png"
},{
    id:"RCB",
    name:"Royal Challengers",
    teamImageUrl:"https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
},

]


class IPLDashBoard extends Component{
    

    render(){
        return(
            <div className='app-container'>
                <div className='app-content-container'>
                    <div className='logo-heading-container'>
                        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl-logo" className='logo-img'/>
                        <h1 className='main-heading'>IPL DashBoard</h1>
                    </div>
                    <ul className='team-card-container'>
                        {iplTeamList.map(eachTeam =>(<IPLTeam teamDetails={eachTeam}/>))}
                       
                    </ul>
                </div>
            </div>
        )

    }
}

export default IPLDashBoard