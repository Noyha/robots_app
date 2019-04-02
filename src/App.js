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
      <div className="App">
        <h1 className="title display-1">Robots App</h1>
        <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <SearchBar HandelChange={ this.HandelSearch }/>
          </Col>
        </Row>
        <Row>
          <RobotList robots={ filteredRobots }/>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App
