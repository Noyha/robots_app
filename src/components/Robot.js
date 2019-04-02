import React from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const Robot = ({ id, name, email }) => {
  return (
    <Col sm="4" className="centerd">
        <Card body inverse color="danger">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <CardBody>
                <CardTitle className="font-weight-bold">{ name }</CardTitle>
                <CardSubtitle>{ email }</CardSubtitle>
            </CardBody>
        </Card>
    </Col>
  )
}

export default Robot
