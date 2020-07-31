import React, { useState } from 'react';

function Month (props) {
  const [isOpen, setIsOpen] = useState(false);

  const mouseEnterHandler = () => {
    setIsOpen(true)
  }

  const mouseLeaveHandler = () => {
    setIsOpen(false)
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }

  const setBorderColor = () => {
    if(props.users.length < 3) {
      return "month-item-grey"
    } else if (props.users.length < 7) {
      return  "month-item-blue"
    } else if (props.users.length < 11) {
      return "month-item-green"
    } 
    return "month-item-red"
  }

  const makeUserList = () => {
    return props.users.map( (user, index) => (
      <li className="user-list-item" key= {user.id}>
        <span><span>{index + 1}</span> {user.firstName} {user.lastName}</span>
        <span>{new Date(user.dob).toLocaleDateString("en-EN", options)}</span>
      </li>
    ))
  }

  return (
    <li className="month-list-item" onMouseLeave= {mouseLeaveHandler}>
      <h4 className = {setBorderColor()} onMouseEnter = {mouseEnterHandler}> {props.month}</h4>
      <ol className= {isOpen ? '' : 'display-none'}>
        {makeUserList()}
      </ol>
    </li>
  )
}

export default Month;