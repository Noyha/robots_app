import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RobotList from './components/RobotList'
import SearchBar from './components/SearchBar'

import { connect } from 'react-redux'
import { fetchRobots, searchValue } from './actions/robotActions'

import { Container, Row, Col } from 'reactstrap'

class App extends Component {

  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    const { robots, search, loading } = this.props.robot;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()));
    if (loading) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div className="text-center">
          <h1 className="title font-weight-bold mt-5 mb-5 display-1">Robots App</h1>
          <Container>
            <Row className="mb-5">
              <Col sm={{ size: 6, offset: 3 }}>
                <SearchBar handelChange={ this.props.searchValue }/>
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
}

App.propTypes = {
  fetchRobots: PropTypes.func.isRequired,
  searchValue: PropTypes.func.isRequired,
  robot: PropTypes.object.isRequired
}

// allows us to use the state in a form of props inside the app component
const mapStateToProps = state => ({
  robot: state.robot
})

export default connect(mapStateToProps, { fetchRobots, searchValue })(App)
