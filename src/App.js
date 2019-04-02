import React, { Component } from 'react';
import Robot from './components/Robot'

import { Container, Row } from 'reactstrap'
class App extends Component {
  state = {
    robots: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }))
      .catch(err => console.log(err))
  }

  render() {
    const { robots } = this.state;
    console.log(robots)
    return (
      <div>
        <h1 className="title text-center display-1">Robots App</h1>
        <Container>
          <Row>
            {robots.map(robot => (
              <Robot key={robot.id} robot={robot}/>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
