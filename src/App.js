import React, { useState } from 'react';
import './App.css';
import Robots from './data/data';
import RobotCard from './RobotCard';
import Search from './Search';

function App() {
  //console.log(Robots)
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className='robots-list'>
        {
          Robots.filter( e => e.name.includes(search) )
            .map(e => <RobotCard key={e.id} {...e} />)
        }
      </div>
    </div>
  );
}

export default App;
