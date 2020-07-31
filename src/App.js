import React, { useEffect, useState } from 'react';
import Months from './components/Months'
import './App.css';

function App() {
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
    .then(response => response.json())
    .then(data => {
      setUsersData(data);
    })
  }, [])

  return (
    <div className="container">
      <Months userData = {usersData} />
    </div>
  );
}

export default App;
