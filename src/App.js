import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchtext: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        console.log(users);
        this.setState({ robots: users });
      });
    // this.setState({ robots: robots });
  }

  onSearchChange = event => {
    this.setState({ searchtext: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchtext.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Treat Them Like People</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
