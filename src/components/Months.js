import React, { useMemo } from 'react';
import Month from './Month'

function Months (props) {
  const months = useMemo(() => {
    const monthsNames = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
  
    return monthsNames.map((month, index) => {
      const filteredUsers = props.userData.filter(human => (new Date(human.dob).toLocaleDateString('en-US', options)).includes(month))
    
      return  (<Month key = {index} users = {filteredUsers} month = {month}/>)
    })
  }
  , [props.userData]) 

  return (
  <div>
    <h1>Months: </h1>
    <ul>
      { months }
    </ul>
  </div>
  )
}

export default Months;