import React, { Component } from 'react';
import Robot from './components/Robot'

import { Container, Row, Col } from 'reactstrap'
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title text-center display-1">Robots App</h1>
        <Container>
          <Row>
            <Col sm="3">
              <Robot />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
