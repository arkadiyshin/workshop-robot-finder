import { useState } from 'react';
import './App.css';


function RobotAdress(props) {

    const { suite, zipcode, city } = props;
    const [display, setDisplay] = useState(false);

    return (
        <>
            <button onClick={ () => setDisplay( x => !x ) }> adress {display ? '⬇️' : '➡️' } </button>
            {display && <div>
                <p>{suite}</p>
                <p>{zipcode} {city}</p>
            </div>}
        </>
    )
}

export default RobotAdress;