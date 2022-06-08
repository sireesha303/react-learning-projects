import './index.css'


const IPLTeam = props =>{
    const {teamDetails} = props
    const {id,name,teamImageUrl} = teamDetails

    return(
        <li className="team-card">
            <img src={teamImageUrl} className="team-logo-img" alt="teamImage"/>
            <p className='team-name'>{name}</p>
        </li>
    )
}

export default IPLTeam