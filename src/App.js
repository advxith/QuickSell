import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './styles/index.css';

const App = () => {
    return (
        <div className="App">
            <h1 style={{ margin: '20px 0' }}>Quicksell</h1>
            <KanbanBoard />
        </div>
    );
};

export default App;
