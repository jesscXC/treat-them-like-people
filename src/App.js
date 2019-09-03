import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots.js';

const App = () => {
    return (
        <div className="tc">
            <h1>Treat Them Like People</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
};

export default App;
