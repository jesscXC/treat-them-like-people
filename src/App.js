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
            searchtext: ""
        }
        console.log("constructor ran");
    }

    componentDidMount() {
        console.log("componentDidMount ran");
        this.setState({ robots: robots });

    }

    onSearchChange = (event) => {
        this.setState({ searchtext: event.target.value });
    }

    render() {
        console.log("render ran");
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchtext.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">Treat Them Like People</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
            );
    };
};

export default App;
