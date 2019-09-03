import React from 'react';
import CardList from './CardList';
import { robots } from './robots.js';

const App = () => {
    return (
        <div>
            <h1>Treat Them Like People</h1>
            <CardList robots={robots} />
        </div>
        )
}

export default App;
