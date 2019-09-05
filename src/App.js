import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
    render() {
        return (
        <div className="tc">
            <h1>Treat Them Like People</h1>
            <SearchBox />
            <CardList robots={this.state.robots} />
        </div>
        );
    };
};

export default App;
