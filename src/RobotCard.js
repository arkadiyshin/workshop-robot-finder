import RobotAdress from './RobotAdress';
import './App.css';


function RobotCard(props) {
    
    const {name, username, phone, email, website} = props;
    

    return (
        <div className='robot-card'>
            <h2>{name}</h2>
            <img src={`https://robohash.org/${props.id}?set=set2`} alt='' />
            <p><b>username: </b> {username}</p>
            <p><b>phone: </b>{phone}</p>
            <p><b>e-mail:</b> {email}</p>
            <p><b>web-site:</b> {website}</p>
            <RobotAdress {...props.address}/>
        </div>
    )

}

export default RobotCard;