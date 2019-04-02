import React from 'react'
import Robot from './Robot'

const RobotList = ({ robots }) => {
  return (
    <>
        {robots.map(robot => (
            <Robot 
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                email={robot.email}
            />
        ))}
    </>
  )
}

export default RobotList
