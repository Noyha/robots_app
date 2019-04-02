import React from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const Robot = ({ id, name, email }) => {
  return (
    <Col sm="3">
        <div className="Robot">
            <Card body inverse color="danger">
                <CardBody>
                    <CardTitle className="text-center font-weight-bold">{ name }</CardTitle>
                </CardBody>
                <img width="100%" src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
                <CardBody>
                    <CardSubtitle className="text-center">{ email }</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    </Col>
  )
}

export default Robot
