import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  const style = {
    backgroundColor: props.color
  }
  return (
    <div className="dogCard" style={ style }>
      <p>Hello { props.username }, I'm a dog and my name is { props.name }.</p>
      <p>My favorite color is { props.color }.</p>
    </div>
  )
}

export default userOutput;