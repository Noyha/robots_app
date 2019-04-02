import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const Robot = () => {
  return (
    <div className="Robot">
        <Card body inverse color="danger">
            <CardBody>
                <CardTitle className="text-center font-weight-bold">Name</CardTitle>
            </CardBody>
            <img width="100%" src="https://robohash.org/1?size=200x200" alt="robot" />
            <CardBody>
                <CardSubtitle className="text-center">jfsj@jjf.com</CardSubtitle>
            </CardBody>
        </Card>
    </div>
  )
}

export default Robot
