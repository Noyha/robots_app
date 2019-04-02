import React, { Component } from 'react';
import RobotList from './components/RobotList'
import SearchBar from './components/SearchBar'

import { Container, Row, Col } from 'reactstrap'

class App extends Component {

  state = {
    robots: [],
    search: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }))
      .catch(err => console.log(err))
  }

  HandelSearch = e => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { robots, search } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="text-center">
        <h1 className="title font-weight-bold mt-5 mb-5 display-1">Robots App</h1>
        <Container>
          <Row className="mb-5">
            <Col sm={{ size: 6, offset: 3 }}>
              <SearchBar HandelChange={ this.HandelSearch }/>
            </Col>
          </Row>
          <Row className="mb-2">
            <RobotList robots={ filteredRobots }/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App
